import { register } from 'swiper/element/bundle';
import { useDynamicAdapt } from './libs/dynamic-adapt';

import '../scss/style.scss';

const burgerButton = document.querySelector('.header__burger-button');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu__link');

register();
useDynamicAdapt('max');

document.addEventListener('DOMContentLoaded', () => {
  //header menu logic
  burgerButton.addEventListener('click', () => {
    menu.classList.toggle('menu_active');
    burgerButton.classList.toggle('header__burger-button_active');
    document.body.classList.toggle('no-scroll');
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuLinks.forEach(item => item.classList.remove('menu__link_active'));
      link.classList.add('menu__link_active');
    });
  });
});
