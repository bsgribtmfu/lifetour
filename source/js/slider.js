import { calcSliderParam } from './calc-params.js';
import { calcFragment } from './fragment.js';

const offers = document.querySelector('.offers');
const offersItems = document.querySelectorAll('.offers__item');

const sliderParams = calcSliderParam(offersItems);
const fragment = calcFragment(sliderParams);

let position = 0;
let touchStart = null;
let touchEnd = null;

const prev = document.querySelector('.pagination__button--prev');
const next = document.querySelector('.pagination__button--next');

const moveRight = () => {
  position += fragment;
  const remainder = ((sliderParams.sumWidth + sliderParams.sumMargin) - position) - offers.offsetWidth; // расчет остатка слайдера
  if (remainder >= 0) {
    offers.style.left = `${-position}px`
  }
  else {
    offers.style.left = `${-position -remainder}px`;
    position -= fragment; // ?
  }
}

const moveLeft = () => {
  position -= fragment;
  if (position < 0) {
    position = 0;
  }
  offers.style.left = `${-position}px`
}

const checkAction = () => {
  if (touchStart > touchEnd) {
    moveRight();
  }
  else {
    moveLeft();
  }
}

const sliderToursInit = () => {
  offers.addEventListener('touchstart', function (e) {
    touchStart = e.changedTouches[0].clientX;
  });

  offers.addEventListener('touchend', function (e) {
    touchEnd = e.changedTouches[0].clientX;
    checkAction();
  });

  prev.addEventListener('click', moveLeft);
  next.addEventListener('click', moveRight);
}

export { sliderToursInit };
