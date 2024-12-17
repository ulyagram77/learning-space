import '../scss/style.scss';

const burgerButton = document.querySelector('.header__burger-button');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu__link');

document.addEventListener('DOMContentLoaded', () => {
  burgerButton.addEventListener('click', () => {
    menu.classList.toggle('menu_active');
    burgerButton.classList.toggle('header__burger-button_active');
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuLinks.forEach(item => item.classList.remove('menu__link_active'));
      link.classList.add('menu__link_active');
    });
  });
});