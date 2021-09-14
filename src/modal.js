// import "./main.css";

// const regeneratorRuntime = require("regenerator-runtime");
// const app_key = require('../config/keys').app_key;

// // MODAL ELEMENTS IN HTML FILE
// const viewRecipeModal = document.getElementById('view-recipe-modal');

// const modalBackdrop = document.getElementById('modal-backdrop');

// function openModal() {
//     const viewButton = document.querySelector('.view-button');
//     viewButton.addEventListener('click', () => {
//         viewRecipeModal.style.display = 'block';
//         modalBackdrop.style.display = 'block';
//     })
// }

const howItWorks = document.querySelector('#how-scroople-works');
const modalBg = document.querySelector('.modal-background');
const times = document.querySelector('.fa-times');

export const modalClick = howItWorks.addEventListener('click', function () {
    modalBg.classList.add('modal-active');
})

export const closeModal = times.addEventListener('click', function () {
    modalBg.classList.remove('modal-active');
})