const gulp = require('gulp');
const concat = require('gulp-concat');

const vendorsScripts = [
  'node_modules/inputmask/dist/inputmask.min.js',
  'node_modules/swiper/swiper-bundle.min.js',
  'node_modules/jquery/dist/jquery.min.js'
];

module.exports = function vendors(cb) {
  return vendorsScripts.length
    ? gulp.src(vendorsScripts)
      .pipe(concat('vendors.js'))
      .pipe(gulp.dest('build/js/'))
    : cb();
};
