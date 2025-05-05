import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import '../css/styles.css';

document.addEventListener('DOMContentLoaded', () => {
  const reviewsSwiper = new Swiper('#reviewsSwiper', {
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
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: 16,
      },
      1200: {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 28,
      },
    },
  });
});
