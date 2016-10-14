import gulp from 'gulp';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';
import cssMin from 'gulp-css';

gulp.task('default', ['styles', 'scripts', 'sw']);

gulp.task('styles', () => {
    gulp.src('src/css/styles.css')
        .pipe(cssMin())
        .pipe(gulp.dest('dist'));
});

gulp.task('scripts', () => {
    gulp.src([
            'src/js/Coordinate.js',
            'src/js/NQueens.js',
            'src/js/Board.js',
            'src/js/app.js'
        ])
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));

});

gulp.task('sw', () => {
  gulp.src('./node_modules/sw-toolbox/sw-toolbox.js')
      .pipe(concat('sw-toolbox.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./dist'));
});
