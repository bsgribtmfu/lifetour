const calcFragment = (sliderParams) => {
  const countMargin = sliderParams.sliderCount - 1; // расчет кол-ва отступов
  const sliderMargin = sliderParams.sumMargin / countMargin; // расчет ширины отступа
  const sliderWidth = sliderParams.sumWidth / sliderParams.sliderCount; // расчет ширины одного слайда
  const fragment = sliderWidth + sliderMargin; // расчет одного фрагмента. фрагмент - сумма одного слайдера и маргина.
  return fragment;
}

export { calcFragment };
