import { lastSlide } from './lastslide.js';

const instructors = document.querySelector('.training__container');
const reviews = document.querySelector('.reviews__swiper-container');

const initSwiperInstructors = () => {
  const swiper = new Swiper(instructors, {
    width: 1197,
    slidesPerView: 5,
    loop: true,
    wrapperClass: 'instructors',
    slideClass: 'instructors__item',
    slidePrevClass: 'instruction__item--prev',
    slideActiveClass: 'instruction__item--active',
    slideNextClass: 'instruction__item--next',
    navigation: {
      nextEl: '.pagination__button--next',
      prevEl: '.pagination__button--prev',
    },
    on: {
      resize: function () {
        lastSlide();
      },
    },
  });
}

const initSwiperReviews = () => {
  const swiper = new Swiper(reviews, {
    width: 1197,
    slidesPerView: 'auto',
    loop: true,
    wrapperClass: 'reviews__list',
    slideClass: 'reviews__item',
    slidePrevClass: 'reviews__item--prev',
    slideActiveClass: 'reviews__item--active',
    slideNextClass: 'reviews__item--next',
    navigation: {
      nextEl: '.pagination__button--next',
      prevEl: '.pagination__button--prev',
    },
  });
}

export { initSwiperInstructors, initSwiperReviews };
