var gulp = require('gulp');
var inject = require('gulp-inject');
var serve = require('gulp-serve');
var wiredep = require('wiredep').stream;

var options = {
  servePort: 8000
}

var paths = {
  scripts: ['./static/js/**/*.js'],
  dependencies: ['./static/bower/']
}

gulp.task('serve', serve({
  root: ['./'],
  port: options.servePort
}));

gulp.task('wiredep', function () {
  gulp.src('./index.html')
    .pipe(wiredep({
      directory: "./static/bower"
    }))
    .pipe(gulp.dest('./'));
});


gulp.task('inject', function () {
  var target = gulp.src('./index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var sources = gulp.src(['./static/js/**/*.js', './static/css/**/*.css'], {read: false});

  return target.pipe(inject(sources, {relative: true}))
    .pipe(gulp.dest('./'));
});
