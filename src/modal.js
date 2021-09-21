const howItWorks = document.querySelector('#how-scroople-works');
const modalBg = document.querySelector('.modal-background');
// const times = document.querySelector('.fa-times');
const times = document.getElementById('modal-x');

export const modalClick = howItWorks.addEventListener('click', function () {
    modalBg.classList.add('modal-active');
})

export const closeModal = times.addEventListener('click', function () {
    modalBg.classList.remove('modal-active');
})

export const clickOutside = window.addEventListener('click', function (e) {
    if (e.target == modalBg) {
        modalBg.classList.remove('modal-active');
    }
})