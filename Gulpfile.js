var gulp = require('gulp');
var inject = require('gulp-inject');
var less = require('gulp-less');
var serve = require('gulp-serve');
var wiredep = require('wiredep').stream;

var path = require('path');

var options = {
  servePort: 8000
}

var paths = {
  js: ['./static/js/**/*.js'],
  dependencies: ['./static/bower/'],
  less: ['./static/less/**/*.less']
}

gulp.task('default', ['watch', 'serve']);

gulp.task('plug', ['less', 'inject']);

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

gulp.task('inject', ['wiredep'] ,function () {
  var target = gulp.src('./index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var sources = gulp.src(['./static/js/**/*.js', './static/css/**/*.css'], {read: false});

  return target.pipe(inject(sources, {relative: true}))
    .pipe(gulp.dest('./'));
});

gulp.task('less', function () {
  return gulp.src(paths.less)
    .pipe(less({

    }))
    .pipe(gulp.dest('./static/css'));
});

gulp.task('watch', function () {
  gulp.watch(paths.less, ['less', 'inject']);
  gulp.watch(paths.js, ['inject']);
});
