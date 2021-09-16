import "./styling/main.scss";
import { modalClick, closeModal, clickOutside } from "./modal";
// import { fetchFilteredSearchResults } from "./filter";
// import axios from "axios";
const axios = require('axios').default;

const regeneratorRuntime = require("regenerator-runtime");

const hiddenHeaders = document.querySelector('.header-hidden');
const searchInput = document.querySelector('#search-input');
const mainSearchInput = document.querySelector('#main-search-input');
const searchContainer = document.querySelector('#search-container');
const searchResultsContainer = document.querySelector('#search-result-container');
const searchResults = document.querySelector('#search-results');
const scroopleSearchBtn = document.querySelector('#scroople-search-btn');

const visibility = document.querySelectorAll('.visibility');

let searchQuery = '';

mainSearchInput.addEventListener('keypress', (e) => {
  // e.preventDefault();
  if (e.key === 'Enter') {
    searchQuery = mainSearchInput.value;
    fetchSearchResults(searchQuery);
  }
})

scroopleSearchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  searchQuery = mainSearchInput.value;
  fetchSearchResults(searchQuery);
})

// FIRST GET REQUEST
function fetchSearchResults(searchQuery) {
  axios({
    method: 'GET',
    url: `/recipes/${searchQuery}`
  })
  .then(res => {
    generateResults(res.data.results)
    searchContainer.style.display = "none";
    // searchContainer.classList.add('hidden');

    searchInput.value = searchQuery;
  // searchInput.placeholder = searchQuery;

    // hiddenHeaders.classList.remove('hiddenHeaders');
    visibility.forEach(ele => {
      ele.style.visibility = 'visible';
    });
  })
  .catch(err => console.log(err))
}

// SECOND GET REQUEST //

const filter = document.querySelector('#filter');
let excludeInput = document.querySelector('#exclude-input');
// let searchQuery = document.querySelector('#search-input').value;
const mealType = document.querySelector('#meal-type');
const diets = document.querySelectorAll('input[name=diets]');

filter.addEventListener('click', () => {
  // e.preventDefault();
  let excludeQuery = excludeInput.value;
  let type = mealType.value;
  let diet = [];
  for (const checkbox of diets) {
    if (checkbox.checked) {
      diet.push(checkbox.value);
    }
  }
  fetchFilteredSearchResults(searchQuery, excludeQuery, type, diet);
})

function fetchFilteredSearchResults(searchQuery, excludeQuery, type, diet) {
  console.log('inside the func');
  axios({
    method: 'GET',
    url: `/recipes/${searchQuery}/filter`,
    params: {
      excludeQuery: excludeQuery,
      type: type,
      diet: diet
    }
  })
  .then(res => {
    generateResults(res.data.results)
  })
  .catch(err => console.log(err))
}

function generateResults(results) {

  let generatedResults = `<p>About ${results.length} results (0.13 seconds)</p>`;

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
    // searchContainer.innerHTML = generatedResults;
}

const tools = document.querySelector('#tools');

// tools.addEventListener('click', () => {
//   // e.preventDefault();
//   searchQuery = mainSearchInput.value;
//   fetchSearchResults(searchQuery);
// })