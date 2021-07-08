const body = document.querySelector('.body');
const input = document.querySelector('.main-navigation__input');
const mainNav = document.querySelector('.main-navigation');
const listNav = document.querySelector('.main-navigation__list');
const label = document.querySelector('.main-navigation__label');
const navLinks = document.querySelectorAll('.main-navigation__link');

const checkLinks = () => {
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      removeClass();
      input.checked = false;
    });
  });
}

const checkToggle = () => {
  if (input.checked) {
    addClass();
  }
  else {
    removeClass();
  }
}

const addClass = () => {
  mainNav.classList.add('main-navigation--show');
  listNav.classList.add('main-navigation__list--show');
  label.classList.add('main-navigation__label--hidden');
  body.classList.add('body--hidden')
}

const removeClass = () => {
  mainNav.classList.remove('main-navigation--show');
  listNav.classList.remove('main-navigation__list--show');
  label.classList.remove('main-navigation__label--hidden');
  body.classList.remove('body--hidden')
}

const initNavigation = () => {
  input.addEventListener('click', () => checkToggle());
  checkLinks();
}

export { initNavigation };
