var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var notify = require("gulp-notify");
var postcss = require("gulp-postcss");
var autoprefixer = require('autoprefixer');
var livereload = require('gulp-livereload');

gulp.task('styles', function() {
  return gulp.src('assets/scss/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(postcss([ autoprefixer({
      remove: false,
    }) ]))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest('./'))
    .pipe(notify("CSS gene@rated"))
    .pipe(livereload());
});

gulp.task('scripts', function() {
  return gulp.src([
        'assets/js/variables.js',
        'assets/js/utils.js',
        'assets/js/active-on-scroll.js',
        'assets/js/header.js',
        'assets/js/scrollto.js',
        'assets/js/title-parallax.js',
    ])
    .pipe(sourcemaps.init())
    .pipe(concat('katumbi.js'))
    .pipe(gulp.dest('dist'))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest('dist'))
    .on('error', sass.logError)
    .pipe(notify("JS generated"))
    .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('assets/scss/**', ['styles']);
    gulp.watch('assets/js/**', ['scripts']);
});

gulp.task('default', ['watch']);
