import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import '../css/styles.css';

document.addEventListener('DOMContentLoaded', () => {
  const productsSwiper = new Swiper('#productsSwiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 18,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 18,
      },
    },
  });
});
