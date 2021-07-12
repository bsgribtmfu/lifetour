const calcSliderParam = (listElems) => {
  let sumWidth = 0;
  let sumMargin = 0;
  let sliderCount = 0;

  listElems.forEach(element => {
    sumWidth += element.offsetWidth;
    sumMargin += parseFloat(window.getComputedStyle(element, null).marginRight);
    sliderCount++;
  });

  return {
    sumWidth: sumWidth,
    sumMargin: sumMargin,
    sliderCount: sliderCount,
  }
}

export { calcSliderParam };
