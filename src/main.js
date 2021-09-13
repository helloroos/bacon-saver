import "./styling/main.scss";
// import gmail from './gmail'
// import axios from "axios";
const axios = require('axios').default;

const regeneratorRuntime = require("regenerator-runtime");

// const searchForm = document.querySelector('.searchForm');
// const filterForm = document.querySelector('.filterForm');
// const filterInputDiv = document.querySelector('.filter-input-div');
// const filterOptions = document.querySelector('.filter-options');
// const filterSelect = document.querySelector('.filter-select');
// const viewRecipeModal = document.getElementById('view-recipe-modal');
// const modalBackdrop = document.getElementById('modal-backdrop');
// const modal = document.querySelector('.modal');

const searchInput = document.querySelector('#search-input');
const searchResults = document.querySelector('#search-result-container');
const scroopleSearch = document.querySelector('#scroople-search-btn');

let searchQuery = '';

searchInput.addEventListener('keypress', (e) => {
    // e.preventDefault();
    if (e.key === 'Enter') {
        searchQuery = searchInput.value;
        // console.log(searchQuery);
        fetchSearchResults(searchQuery);
    }
})

// FIRST GET REQUEST
async function fetchSearchResults(searchQuery) {
    axios({
        method: 'GET',
        url: `/recipes/${searchQuery}`
    })
    .then(res => {
        // console.log(res.data.results);
        generateResults(res.data.results)
    })
    .catch(err => console.log(err))
}

// filterForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     let excludeQuery = e.target.querySelector('.excludeQuery').value;
//     let type = e.target.querySelector('.type').value;
//     let diet = [];
//     for (const checkbox of e.target.querySelectorAll('input[name=diets]')) {
//         if (checkbox.checked) {
//             diet.push(checkbox.value);
//         }
//     }
//     // searchQuery = 'cilantro' // TO BE REMOVED
//     fetchFilteredSearchResults(searchQuery, excludeQuery, type, diet);
// })

// // SECOND GET REQUEST
// async function fetchFilteredSearchResults(searchQuery, excludeQuery, type, diet) {
//     axios({
//         method: 'GET',
//         url: `/recipes/${searchQuery}/filter`,
//         params: {
//             excludeQuery: excludeQuery,
//             type: type,
//             diet: diet
//         }
//     })
//         .then(res => {
//             console.log(res);
//             generateHTML(res.data.results)
//         })
//         .catch(err => console.log(err))

// }

// function openModal() {
//     viewRecipeModal.style.display = 'block';
//     modalBackdrop.style.display = 'block';
// }

// function closeModal() {
//     viewRecipeModal.style.display = 'none';
//     modalBackdrop.style.display = 'none';
// }

function generateResults(results) {

    let generatedResults = ``;

    results.forEach(result => {
        const item = 
        `<div class="item">
            <img src=${result.image}>
            <div class="flex-container">
                <h1 class="title">${result.title}</h1>
            </div>
            <div class="inner-detail" style="display: none">
                <h1>${result.title}</h1>
                <p>${result.readyInMinutes} minutes</p>
                <p>${result.servings} servings</p>
                <img src=${result.image}>
                <p id="summary">${result.summary} servings</p>
                <a href=${result.sourceUrl} target="_blank">View recipe</a>
                <form>
                    <input type="email" id="email" placeholder="Enter your email">
                    <button id="email-button">Email recipe</button>
                </form>
                <button id="calendar-button">Add to calendar</button>
            </div>
        </div>`
        generatedResults += item;
    });

    searchResults.innerHTML = generatedResults;
}

// function initButtons() {
//     document.querySelector('.close-btn').addEventListener('click', () => {
//         console.log('Close');
//         closeModal();
//     });
// }

// initButtons();