require('@babel/register');
const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');

function styles() {
    return gulp
        .src('src/css/styles.css')
        .pipe(cleanCSS({ compatibility: '*' }))
        .pipe(gulp.dest('dist'));
}

function scripts() {
    return gulp
        .src(['src/js/Coordinate.js', 'src/js/NQueens.js', 'src/js/Board.js', 'src/js/app.js'])
        .pipe(
            babel({
                presets: [['@babel/preset-env']],
            })
        )
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
}

function sw() {
    return gulp
        .src('./node_modules/workbox-sw/build/workbox-sw.js')
        .pipe(concat('workbox-sw.js'))
        .pipe(gulp.dest('./dist'));
}

gulp.task('default', gulp.series(gulp.parallel([styles, scripts]), sw));
