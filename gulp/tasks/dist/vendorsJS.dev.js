"use strict";

var gulp = require('gulp');

var concat = require('gulp-concat');

var vendorsScripts = ['node_modules/swiper/swiper-bundle.min.js'];

module.exports = function vendors(cb) {
  return vendorsScripts.length ? gulp.src(vendorsScripts).pipe(concat('vendors.js')).pipe(gulp.dest('build/js/')) : cb();
};