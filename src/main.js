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
const searchResultsContainer = document.querySelector('#search-result-container');
const searchResults = document.querySelector('#search-results');
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

function generateResults(results) {

    let generatedResults = `<p>About ${results.length} results (0.73 seconds)</p>`;

    results.forEach(result => {
        const resultItem = 
        `<div class="result">
            <p class="url">${result.sourceUrl}</p>
            <a href=${result.sourceUrl} target="_blank"><h3 class="title">${result.title}</h3></a>
            <p class="summary">${result.summary}</p>
            <div class="result-links">
                <p>${result.readyInMinutes} minutes</p>
                <p>${result.servings} servings</p>
            </div>
        </div>`
        generatedResults += resultItem;
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