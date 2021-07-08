import { calcSliderParam } from './calc-params.js';
import { calcFragment } from './fragment.js';

const instructors = document.querySelector('.instructors');
const instructorsItems = document.querySelectorAll('.instructors__item');

const sliderParams = calcSliderParam(instructorsItems);
const fragment = calcFragment(sliderParams);

const lastSlide = () => {
  const paddindWidth = window.innerWidth - instructors.offsetWidth; // расчет padding-ов контейнера
  const res = Math.floor((window.innerWidth - (paddindWidth / 2)) / fragment); // расчет колличества видимых(!) слайдов.
  const remainderSlider = sliderParams.sliderCount - res;
  const items = Array.from(instructorsItems);

  items.reverse().forEach((item, index) => {
    if (index < remainderSlider) {
      item.style.opacity = 0.5;
    }
    else {
      item.style.opacity = 1;
    }
  });
}

export { lastSlide };
