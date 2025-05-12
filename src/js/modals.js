(() => {
  const MODAL_SELECTORS = [
    {
      open: '[data-modal-buy-open]',
      close: '[data-modal-buy-close]',
      modal: '[data-modal-buy-now]',
    },
    {
      open: '[data-modal-review-open]',
      close: '[data-modal-review-close]',
      modal: '[data-modal-review]',
    },
    {
      open: '[data-modal-subscribe-open]',
      close: '[data-modal-subscribe-close]',
      modal: '[data-modal-subscribe]',
    },
  ];

  MODAL_SELECTORS.forEach(({ open, close, modal }) => {
    const openBtns = document.querySelectorAll(open);
    const closeBtn = document.querySelector(close);
    const modalEl = document.querySelector(modal);

    if (!modalEl) return;

    const toggleModal = () => {
      modalEl.classList.toggle('modal-is-open');
      document.body.classList.toggle('no-scroll');
    };

    openBtns.forEach(btn => btn.addEventListener('click', toggleModal));
    closeBtn?.addEventListener('click', toggleModal);

    modalEl.addEventListener('click', e => {
      if (e.target === modalEl) toggleModal();
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && modalEl.classList.contains('modal-is-open')) {
        toggleModal();
      }
    });
  });
})();
