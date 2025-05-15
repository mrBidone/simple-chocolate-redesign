import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import '../css/styles.css';

// document.addEventListener('DOMContentLoaded', () => {
//   const reviewsSwiper = new Swiper('#reviewsSwiper', {
//     direction: 'horizontal',
//     loop: true,
//     pagination: {
//       el: '.reviews-swiper-pagination',
//       clickable: true,
//       bulletClass: 'reviews-swiper-pagination-bullet',
//       bulletActiveClass: 'reviews-swiper-pagination-bullet-active',
//     },
//     breakpoints: {
//       320: {
//         centeredSlides: true,
//         slidesPerView: 1,
//         spaceBetween: 20,
//       },
//       768: {
//         centeredSlides: true,
//         slidesPerView: 1,
//         spaceBetween: 16,
//       },
//       1200: {
//         slidesPerView: 3,
//         centeredSlides: true,
//         spaceBetween: 28,
//       },
//     },
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  const reviewsContainer = document.querySelector('.review-list');

  fetch('/data/reviews.json')
    .then(response => {
      if (!response.ok) throw new Error('Ошибка загрузки JSON');
      return response.json();
    })
    .then(data => {
      data.forEach(review => {
        const li = document.createElement('li');
        li.className = 'review-list-item swiper-slide';
        li.innerHTML = `
            <div class="review-item-thumb">
              <img
                class="reviewers-photo"
                src="${review.photo}"
                alt="User's photo"
                width="80"
              />
              <div class="review-card-thumb">
                <p class="reviewers-name">${review.name}</p>
                <p class="review-text">${review.text}</p>
              </div>
            </div>
          `;
        reviewsContainer.appendChild(li);
      });

      if (typeof Swiper !== 'undefined') {
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
      }
    })
    .catch(error => {
      console.error('Не удалось загрузить отзывы:', error);
    });
});
