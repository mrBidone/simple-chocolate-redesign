import './js/products.js';
import './js/reviews.js';
import './js/header.js';
import './js/intl-tel-select.js';
import './js/modal-review.js';
import './js/modal-subscribe.js';
import './js/modals.js';

document.addEventListener('DOMContentLoaded', () => {
  const ingredientsList = document.querySelector('.ingredients-list');
  const cards = document.querySelectorAll('.ingredients-card');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          cards.forEach((card, i) => {
            if (i === 0 || i === 2) {
              setTimeout(() => {
                card.classList.add('animate-hint');
                setTimeout(() => {
                  card.classList.remove('animate-hint');
                }, 800);
              }, i * 100);
            }
          });

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  if (ingredientsList) observer.observe(ingredientsList);
});

(() => {
  const videoWrapper = document.querySelector('.made-video');
  const link = videoWrapper.querySelector('.video-link');
  const button = videoWrapper.querySelector('.video-btn');

  const videoId = 'DISjdfkSjc8'; // ID из твоей ссылки https://youtu.be/DISjdfkSjc8

  function createIframe(id) {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute(
      'src',
      `https://www.youtube.com/embed/${id}?rel=0&showinfo=0&autoplay=1`
    );
    iframe.classList.add('video-media');
    // iframe.style.width = '100%';
    // iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.style.borderRadius = '15px';
    return iframe;
  }

  function playVideo() {
    const iframe = createIframe(videoId);
    link.remove();
    button.remove();
    videoWrapper.appendChild(iframe);
  }

  link.addEventListener('click', e => {
    e.preventDefault();
    playVideo();
  });

  button.addEventListener('click', playVideo);
})();
