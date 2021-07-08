const element = document.querySelector('.feedback__input-phone');

const initMaskNubmer = () => {
  let maskOptions = {
    mask: '+{7} (000) 000-00-00'
  };

  let mask = IMask(element, maskOptions);
}

export { initMaskNubmer };
