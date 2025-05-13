import './js/products.js';
import './js/reviews.js';
import './js/header.js';
import './js/intl-tel-select.js';
import './js/modal-review.js';
import './js/modal-subscribe.js';
import './js/modals.js';

// function findVideos() {
//   let videos = document.querySelectorAll('.made-video');

//   for (let i = 0; i < videos.length; i++) {
//     setupVideo(videos[i]);
//   }
// }

// function setupVideo(video) {
//   let link = video.querySelector('.video-link');
//   let media = video.querySelector('.video__media');
//   let button = video.querySelector('.video-btn');
//     let id = parseMediaURL(media);

//   video.addEventListener('click', () => {
//     let iframe = createIframe(id);

//     link.remove();
//     button.remove();
//     video.appendChild(iframe);
//   });

//   link.removeAttribute('href');
//   video.classList.add('video-enabled');
// }

// function parseMediaURL(media) {
//   let regexp =
//     /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
//   let url = media.src;
//   let match = url.match(regexp);

//   return match[1];
// }

// function createIframe(id) {
//   let iframe = document.createElement('iframe');

//   iframe.setAttribute('allowfullscreen', '');
//   iframe.setAttribute('allow', 'autoplay');
//   iframe.setAttribute('src', generateURL(id));
//   iframe.classList.add('video__media');

//   return iframe;
// }

// function generateURL(id) {
//   let query = '?rel=0&showinfo=0&autoplay=1';

//   return 'https://www.youtube.com/embed/' + id + query;
// }

// findVideos();

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
