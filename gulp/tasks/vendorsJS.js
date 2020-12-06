const gulp = require('gulp');
const concat = require('gulp-concat');

const vendorsScripts = [
];

module.exports = function vendors(cb) {
  return vendorsScripts.length
    ? gulp.src(vendorsScripts)
      .pipe(concat('vendors.js'))
      .pipe(gulp.dest('build/js/'))
    : cb();
};
