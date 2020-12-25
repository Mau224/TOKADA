const swiper = new Swiper('.recomend__slider', {
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // centeredSlides: true,
    // clickable: true,
    spaceBetween: 14,
    // loop: true,
    // updateOnWindowResize: true,

    slidesPerView: 1.34,
    slidesOffsetBefore: 20,
    slidesOffsetAfter: 20,

    breakpoints: {
    867: {
        slidesPerView: 3.1,
        loop: true,
        spaceBetween: 40,
        // slidesOffsetBefore: 100,
        // slidesOffsetAfter: 100,
    },
    }
});

const slide = document.querySelector('.recomend__item')

swiper.on('slideChange', function () {
    slide.classList.remove('recomend__item--first');
});

// const slider = document.querySelector('.whyus__wrapper');
const sliders = document.querySelectorAll('.slider');

function mobileSlider() {
    sliders.forEach((el) => {
        let swiperMob = new Swiper(el, {
            slidesPerView: 1.24,
            spaceBetween: 22,
            navigation: {
                nextEl: el.querySelector('.swiper-button-next'),
                prevEl: el.querySelector('.swiper-button-prev'),
            },
    });


        if (window.innerWidth > 867) {
            el.dataset.mobile = 'false';
            if (el.classList.contains('swiper-container-initialized')) {
                swiperMob.destroy();
            }
        }
    });
}

mobileSlider()

window.addEventListener('resize', () => {
	mobileSlider();
});

// const slider = document.querySelector('.whyus__wrapper');
const sliderMini = document.querySelectorAll('.slider-mini');

function mobileSliderMini() {
    sliderMini.forEach((el) => {
        let swiperMobMini = new Swiper(el, {
            slidesPerView: 1.5,
            spaceBetween: 22,
            navigation: {
                nextEl: el.querySelector('.swiper-button-next'),
                prevEl: el.querySelector('.swiper-button-prev'),
            },
        });


        if (window.innerWidth > 867) {
            el.dataset.mobile = 'false';
            if (el.classList.contains('swiper-container-initialized')) {
                swiperMobMini.destroy();
            }
        }
    });
}

mobileSliderMini()

window.addEventListener('resize', () => {
    mobileSliderMini();
});

