var gulp = require('gulp'),
  browserify = require('gulp-browserify'),
  concat = require('gulp-concat'),
  exorcist = require('exorcist'),
  babelify = require('babelify'),
  transform = require('vinyl-transform'),
  reactify = require('reactify')
;

gulp.task('browserify', function() {
  gulp.src(['js/app.js'])
    .pipe(browserify({
      insertGlobals: true,
      transform: [reactify, babelify],
      debug: true
    }))
    .pipe(transform(function () { return exorcist('dist/bundle.js.map'); }))
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function() {
  gulp.watch(['js/**/*.js'],[
    'browserify'
  ]);
});
