import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
  },
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 18,
  followFinger: true,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },

    1200: {
      slidesPerView: 4,
      spaceBetween: 18,
    },
  },
});
