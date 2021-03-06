import $ from 'jquery';
import 'slick-carousel';
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";

import '../sass/style.scss';
import '../css/fancybox.css';

import menuTrigger from './modules/menuTrigger.js';
import modalTrigger from './modules/modalTrigger.js';
import modalClose from './modules/modalClose.js';
import tabs from './modules/tabs.js';


window.addEventListener('DOMContentLoaded', function() {
  menuTrigger('.menu__wrapper', '.menu__items', 'menu__wrapper_active', '.menu__close');
    
  $('.carousel').slick({
    slidesToShow: 4,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    draggable: true,
    responsive: [{
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
      }
    }]
  });

  $('.carousel .carousel-preview').slick({
    draggable: false,
    touchMove: false,
  });

  $('.journey .journey__items').slick({
    slidesToShow: 1,
    variableWidth: true,
    arrows: false,
    centerMode: true,
    autoplay: false,
    autoplaySpeed: 3000,
    draggable: false,
    touchMove: false,
  });

  $('.full-catalog__items .carousel-preview').slick();

  modalTrigger('.open');
  modalClose('.close');
  tabs('.tabs__wrapper', '.tabs__item', '.tabs__content', 'tabs__item_active', 'tabs__content_active');
});