import intlTelInput from 'intl-tel-input';

(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-buy-open]'),
    closeModalBtn: document.querySelector('[data-modal-buy-close]'),
    modal: document.querySelector('[data-modal-buy-now]'),
  };

  refs.openModalBtn.forEach(btn => {
    btn.addEventListener('click', toggleModal);
  });

  refs.closeModalBtn.addEventListener('click', toggleModal);

  refs.modal.addEventListener('click', event => {
    if (event.target === refs.modal) {
      toggleModal();
    }
  });

  document.addEventListener('keydown', event => {
    if (
      event.key === 'Escape' &&
      refs.modal.classList.contains('modal-is-open')
    ) {
      toggleModal();
    }
  });

  function toggleModal() {
    refs.modal.classList.toggle('modal-is-open');
    document.body.classList.toggle('no-scroll');
  }
})();

const inputs = document.querySelectorAll('.phone-input');

inputs.forEach(input => {
  intlTelInput(input, {
    initialCountry: 'ua',
    loadUtils: () => import('intl-tel-input/utils'),
    onlyCountries: [
      'al',
      'at',
      'be',
      'bg',
      'hr',
      'cz',
      'dk',
      'ee',
      'fi',
      'fr',
      'de',
      'gr',
      'va',
      'hu',
      'is',
      'ie',
      'it',
      'lv',
      'li',
      'lt',
      'lu',
      'md',
      'nl',
      'no',
      'pl',
      'pt',
      'ro',
      'rs',
      'sk',
      'si',
      'es',
      'se',
      'ch',
      'ua',
      'gb',
    ],
    separateDialCode: true,
    useFullscreenPopup: false,
    countrySearch: false,
    strictMode: true,
    placeholderNumberType: 'MOBILE',
  });
});
