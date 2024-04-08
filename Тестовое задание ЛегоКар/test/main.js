const burger = document.querySelector('.header__btn-burger');
const menu = document.querySelector('nav')

burger.addEventListener('click', () => {
    burger.classList.toggle('burger-active');
    menu.classList.toggle('nav-active')

})
