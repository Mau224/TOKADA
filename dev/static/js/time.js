document.addEventListener('DOMContentLoaded', () => {
	const newYear = new Date('Dec 28 2021 00:00:00');

	// const daysVal = document.querySelector('.time-count__days .time-count__val');
	const hoursVal = document.querySelector('.time-count__hours .time-count__val');
	const minutesVal = document.querySelector('.time-count__minutes .time-count__val');
	const secondsVal = document.querySelector('.time-count__seconds .time-count__val');

	// const daysText = document.querySelector('.time-count__days .time-count__text');
	const hoursText = document.querySelector('.time-count__hours .time-count__text');
	const minutesText = document.querySelector('.time-count__minutes .time-count__text');
	const secondsText = document.querySelector('.time-count__seconds .time-count__text');

	function declOfNum(number, titles) {
		let cases = [2, 0, 1, 1, 1, 2];
		return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
	}

	const timeCount = () => {
		let now = new Date();
		let leftUntil = newYear - now;

		// let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
		let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
		let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
		let seconds = Math.floor(leftUntil / 1000) % 60;

		if (hours < 10) {
			hoursVal.textContent = '0' + hours;
			hoursVal.style.letterSpacing = '5.8vw';
		} else if (hours < 20) {
			hoursVal.textContent = hours;
			hoursVal.style.letterSpacing = '8.7vw';
		} else {
			hoursVal.textContent = hours;
			hoursVal.style.letterSpacing = '5.8vw';
		}

		if (minutes < 10) {
			minutesVal.textContent = '0' + minutes;
			minutesVal.style.letterSpacing = '5.8vw';
		} else if (minutes < 20) {
			minutesVal.textContent = minutes;
			minutesVal.style.letterSpacing = '6.7vw';
		} else {
			minutesVal.textContent = minutes;
			minutesVal.style.letterSpacing = '5.8vw';
		}

		if (seconds < 10) {
			secondsVal.textContent = '0' + seconds;
			secondsVal.style.letterSpacing = '5.75vw';
		} else if (seconds < 20) {
			secondsVal.textContent = seconds;
			secondsVal.style.letterSpacing = '6.7vw';
		} else {
			secondsVal.textContent = seconds;
			secondsVal.style.letterSpacing = '5.75vw';
		}

		if (window.innerWidth > 1600) {
			if (hours < 10) {
				hoursVal.textContent = '0' + hours;
				hoursVal.style.letterSpacing = '5.8vw';
			} else if (hours < 20) {
				hoursVal.textContent = hours;
				hoursVal.style.letterSpacing = '6.7vw';
			} else {
				hoursVal.textContent = hours;
				hoursVal.style.letterSpacing = '5.8vw';
			}

			if (minutes < 10) {
				minutesVal.textContent = '0' + minutes;
				minutesVal.style.letterSpacing = '5.8vw';
			} else if (minutes < 20) {
				minutesVal.textContent = minutes;
				minutesVal.style.letterSpacing = '6.7vw';
			} else {
				minutesVal.textContent = minutes;
				minutesVal.style.letterSpacing = '5.8vw';
			}

			if (seconds < 10) {
				secondsVal.textContent = '0' + seconds;
				secondsVal.style.letterSpacing = '5.7vw';
			} else if (seconds < 20) {
				secondsVal.textContent = seconds;
				secondsVal.style.letterSpacing = '6.1vw';
			} else {
				secondsVal.textContent = seconds;
				secondsVal.style.letterSpacing = '5.7vw';
			}
		}


		if (window.innerWidth < 870) {
			if (hours < 10) {
				hoursVal.textContent = '0' + hours;
				hoursVal.style.letterSpacing = '57px';
			} else if (hours < 20) {
				hoursVal.textContent = hours;
				hoursVal.style.letterSpacing = '65px';
			} else {
				hoursVal.textContent = hours;
				hoursVal.style.letterSpacing = '57px';
			}

			if (minutes < 10) {
				minutesVal.textContent = '0' + minutes;
				minutesVal.style.letterSpacing = '57px';
			} else if (minutes < 20) {
				minutesVal.textContent = minutes;
				minutesVal.style.letterSpacing = '65px';
			} else {
				minutesVal.textContent = minutes;
				minutesVal.style.letterSpacing = '57px';
			}

			if (seconds < 10) {
				secondsVal.textContent = '0' + seconds;
				secondsVal.style.letterSpacing = '57px';
			} else if (seconds < 20) {
				secondsVal.textContent = seconds;
				secondsVal.style.letterSpacing = '65px';
			} else {
				secondsVal.textContent = seconds;
				secondsVal.style.letterSpacing = '57px';
			}
		}

		hoursText.textContent = declOfNum(hours, ['час', 'часа', 'часов']);
		minutesText.textContent = declOfNum(minutes, ['минута', 'минуты', 'минут']);
		secondsText.textContent = declOfNum(seconds, ['секунда', 'секунды', 'секунд']);
	};

	timeCount();
	setInterval(timeCount, 1000);
});
