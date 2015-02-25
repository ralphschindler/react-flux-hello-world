var gulp = require('gulp'),
  browserify = require('gulp-browserify'),
  concat = require('gulp-concat'),
  exorcist = require('exorcist'),
  babelify = require('babelify'),
  transform = require('vinyl-transform'),
  reactify = require('reactify')
  deploy = require('gulp-gh-pages')
;

gulp.task('build', function() {
  gulp.src(['js/app.js'])
    .pipe(browserify({
      insertGlobals: true,
      transform: [reactify, babelify],
      debug: true
    }))
    .pipe(transform(function () { return exorcist('dist/bundle.js.map'); }))
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('dist/js/'));
  gulp.src(['index.html'])
    .pipe(gulp.dest('dist/'));
});

gulp.task('deploy', function () {
  return gulp.src('./dist/**/*')
    .pipe(deploy());
});

gulp.task('watch', function() {
  gulp.watch(['js/**/*.js'],[
    'build'
  ]);
});
