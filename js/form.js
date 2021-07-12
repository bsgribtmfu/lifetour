const element = document.querySelector('.feedback__input-phone');

const initMaskNubmer = () => {
  const maskOptions = {
    mask: '+{7} (000) 000-00-00'
  };

  const mask = IMask(element, maskOptions);
}

export { initMaskNubmer };
