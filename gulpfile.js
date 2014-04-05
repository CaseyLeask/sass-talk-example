var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  gulp.src('app/styles/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('build/styles'));
});
gulp.task('default', function() {
});
