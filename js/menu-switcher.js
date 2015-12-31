function hideOrShowMenu() {
  if (navMobile.classList.contains('nav-mobile--visible')) {
    navMobile.classList.remove('nav-mobile--visible');
    navToggle.classList.remove('header__nav-toggle--active');
  } else {
    navMobile.classList.add('nav-mobile--visible');
    navToggle.classList.add('header__nav-toggle--active');
  }
}
var navToggle = document.querySelector('.header__nav-toggle');
var navMobile = document.querySelector('.nav-mobile');
navToggle.addEventListener('click', hideOrShowMenu);