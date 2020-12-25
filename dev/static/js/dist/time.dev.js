"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var newYear = new Date('Dec 28 2021 00:00:00'); // const daysVal = document.querySelector('.time-count__days .time-count__val');

  var hoursVal = document.querySelector('.time-count__hours .time-count__val');
  var minutesVal = document.querySelector('.time-count__minutes .time-count__val');
  var secondsVal = document.querySelector('.time-count__seconds .time-count__val'); // const daysText = document.querySelector('.time-count__days .time-count__text');

  var hoursText = document.querySelector('.time-count__hours .time-count__text');
  var minutesText = document.querySelector('.time-count__minutes .time-count__text');
  var secondsText = document.querySelector('.time-count__seconds .time-count__text');

  function declOfNum(number, titles) {
    var cases = [2, 0, 1, 1, 1, 2];
    return titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];
  }

  var timeCount = function timeCount() {
    var now = new Date();
    var leftUntil = newYear - now; // let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);

    var hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
    var minutes = Math.floor(leftUntil / 1000 / 60) % 60;
    var seconds = Math.floor(leftUntil / 1000) % 60;

    if (hours < 10) {
      hoursVal.textContent = '0' + hours;
      hoursVal.style.letterSpacing = '8vw';
    } else if (hours < 20) {
      hoursVal.textContent = hours;
      hoursVal.style.letterSpacing = '8.7vw';
    } else {
      hoursVal.textContent = hours;
      hoursVal.style.letterSpacing = '8vw';
    }

    if (minutes < 10) {
      minutesVal.textContent = '0' + minutes;
      minutesVal.style.letterSpacing = '7.8vw';
    } else if (minutes < 20) {
      minutesVal.textContent = minutes;
      minutesVal.style.letterSpacing = '8.7vw';
    } else {
      minutesVal.textContent = minutes;
      minutesVal.style.letterSpacing = '7.8vw';
    }

    if (seconds < 10) {
      secondsVal.textContent = '0' + seconds;
      secondsVal.style.letterSpacing = '7.65vw';
    } else if (seconds < 20) {
      secondsVal.textContent = seconds;
      secondsVal.style.letterSpacing = '8.7vw';
    } else {
      secondsVal.textContent = seconds;
      secondsVal.style.letterSpacing = '7.65vw';
    }

    hoursText.textContent = declOfNum(hours, ['час', 'часа', 'часов']);
    minutesText.textContent = declOfNum(minutes, ['минута', 'минуты', 'минут']);
    secondsText.textContent = declOfNum(seconds, ['секунда', 'секунды', 'секунд']);
  };

  timeCount();
  setInterval(timeCount, 1000);
});