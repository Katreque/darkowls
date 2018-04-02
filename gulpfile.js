var gulp = require('gulp');

gulp.task('default', function() {
  return gulp.src('./app/*.html')
    .pipe(gulp.dest('./dist'))
    done();
});
