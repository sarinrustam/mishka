let headerButton = document.querySelector('.navigation__toggle');
let menu = document.querySelector('.navigation');
let popup = document.querySelector('.cart-popup');
let hotOfferButton = document.querySelector('.hot-offer__button');
let productButton = document.querySelectorAll('.product__button');

menu.classList.remove('navigation--no-js');
menu.classList.add('navigation--hide');

headerButton.addEventListener('click', function(evt) {
  evt.preventDefault();

  menu.classList.toggle('navigation--hide');
})

if (hotOfferButton) {

  hotOfferButton.addEventListener('click', function(evt) {
  evt.preventDefault();

  popup.classList.toggle('cart-popup--open');
})}

if (productButton.length) {
  for (let i = 0; i < productButton.length; i++ ) {
    productButton[i].addEventListener('click', function(evt) {
    evt.preventDefault();

    popup.classList.toggle('cart-popup--open');
})}
}

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains('navigation-hide')) {
      popup.classList.remove('navigation-hide');
    }
  }
});
