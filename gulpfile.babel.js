var del             = require('del'),
    gulp            = require('gulp'),
    util            = require('gulp-util'),
    sass            = require('gulp-sass'),
    babel           = require('gulp-babel'),
    jshint          = require('gulp-jshint'),
    uglify          = require('gulp-uglify'),
    concat	        = require('gulp-concat'),
    htmlmin         = require('gulp-htmlmin'),
    changed         = require('gulp-changed'),
    imagemin        = require('gulp-imagemin'),
    ngTemplate      = require('gulp-ng-template'),
    ngAnnotate      = require('gulp-ng-annotate'),
    sourcemaps      = require('gulp-sourcemaps'),
    livereload      = require('gulp-livereload'),
    autoprefixer    = require('gulp-autoprefixer'),
    angularFilesort = require('gulp-angular-filesort');


// checks if gulp --production was ran
var production = !!util.env.production;
var liveReloadUp = false;

const SRC = {
    appJS:          './app/holding/**/*.js',
    appScss:        './app/holding/app.scss',
    appScssWatch:   './app/holding/**/*.scss',
    htmlTemplates:  './app/holding/**/*.html',
    images:         './app/images/**/*'
};

const DEST = {
    dist:        './dist/**/*',
    appCss:      './dist/styles/',
    appJS:       './dist/scripts',
    images:      './dist/images/'
};

if (production) {
    gulp.task('default', ['clean', 'buildImages', 'sassApp', 'buildTemplates', 'JsApp']);
} else {
    gulp.task('default', ['watch']);
}

function swallowError (error) {
    console.log(error.toString());
    this.emit('end');
}

gulp.task('clean', cb => {
    return del(DEST.dist, cb)
});

// WATCHER
gulp.task('watch', ['buildImages', 'sassApp', 'buildTemplates', 'JsApp'], () => {
    livereload.listen();

    liveReloadUp = true;

    gulp.watch(SRC.images, ['buildImages']);
    gulp.watch(SRC.appScssWatch, ['sassApp']);
    gulp.watch(SRC.appJS, ['JsApp']);
    gulp.watch(SRC.htmlTemplates, ['buildTemplates']);
});


// CSS TASKS
gulp.task('sassApp', () => cssGulpModel(SRC.appScss, DEST.appCss, 'app'));

function cssGulpModel (src, dest, name) {
    return gulp.src(src)
        .pipe(production ? util.noop() : changed(dest))
        .pipe(production ? util.noop() : sourcemaps.init() )
        .pipe(production ? sass({outputStyle: 'compressed'}) : sass())
        .on('error', swallowError)
        .pipe(production ? util.noop() : sourcemaps.write())
        .pipe(concat(`${name}.css`))
        .pipe(autoprefixer())
        .pipe(gulp.dest(dest))
        .pipe(liveReloadUp && !production ? livereload() : util.noop());
}

// JS TASKS
gulp.task('JsApp', () => jsGulpModel(SRC.appJS, DEST.appJS, 'app'));

function jsGulpModel (src, dest, name) {
    return gulp.src(src)
        .pipe(production ? util.noop() :  sourcemaps.init())
        .pipe(babel())
        .on('error', swallowError)
        .pipe(ngAnnotate({
            add: true,
            single_quotes: true
        }))
        .pipe(angularFilesort())
        .pipe(production ? util.noop() : jshint({ esnext: true }))
        .pipe(concat(`${name}.js`))
        .pipe(production ? uglify() : util.noop())
        .pipe(production ? util.noop() : sourcemaps.write())
        .pipe(gulp.dest(dest))
        .pipe(livereload(liveReloadUp && !production? livereload({reloadPage : 'index.html'}) : util.noop()));

}

// HTML TASKS
gulp.task('buildTemplates', () => {
    return gulp.src(SRC.htmlTemplates, {})
        .pipe(production ? util.noop() : changed(DEST.appJS))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(ngTemplate({
            filePath: 'templates.js',
            moduleName: 'holding.templates',
            standalone: true
        }))
        .pipe(production ? uglify({mangle: false}) : util.noop())
        .pipe(gulp.dest(DEST.appJS))
        .pipe(livereload(liveReloadUp && !production? livereload({reloadPage : 'index.html'}) : util.noop()));
});

// COMPRESSES IMAGES
gulp.task('buildImages', () => {
    return gulp.src(SRC.images)
        .pipe(production ? imagemin() : util.noop())
        .pipe(gulp.dest(DEST.images));
});
