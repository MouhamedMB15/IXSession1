

const burger = document.querySelector('.navbar__burger');
const navLinks = document.querySelector('.navbar__links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    //animate burger lines into an X
    burger.classList.toggle('toggle');
});