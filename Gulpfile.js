var gulp = require('gulp');
var path = require('path');
var less = require('gulp-less');
var webpack = require('gulp-webpack');

var paths = {
  less: ["static/less/**/*.less"],
  css: "static/css"
}

gulp.task('webpack', function(){
  gulp.src(paths.less)
  .pipe(webpack( require('./webpack.config.js') ))
  .pipe(gulp.dest('.'));
})

gulp.task('watch', function() {
  gulp.watch(paths.less, ['webpack']);
});
