const refs = {
  openMenuBtn: document.querySelector('[data-menu-open]'),
  mobMenu: document.querySelector('[data-menu]'),
  mobMenuLinks: document.querySelector('.mobile-menu-nav-links-container'),
};

refs.openMenuBtn.addEventListener('click', handleHamburgerClick);
refs.mobMenu.addEventListener('click', handleMobMenuClick);

function handleHamburgerClick() {
  refs.mobMenu.classList.add('is-open');
}

function handleMobMenuClick(event) {
  if (event.target.hasAttribute('data-menu-close')) {
    refs.mobMenu.classList.remove('is-open');
  }
}
