(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-subscribe-open]'),
    closeModalBtn: document.querySelector('[data-modal-subscribe-close]'),
    modal: document.querySelector('[data-modal-subscribe]'),
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
