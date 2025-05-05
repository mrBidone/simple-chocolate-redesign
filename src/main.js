import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import './css/styles.css';

document.addEventListener('DOMContentLoaded', () => {
  const productsSwiper = new Swiper('.swiper', {
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
  const reviewsSwiper = new Swiper('.reviews-swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.reviews-swiper-pagination',
      clickable: true,
      bulletClass: 'reviews-swiper-pagination-bullet',
      bulletActiveClass: 'reviews-swiper-pagination-bullet-active',
    },
    breakpoints: {
      320: {
        width: 335,
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        centeredSlides: true,
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 28,
      },
    },
  });
});
