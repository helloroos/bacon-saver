import "./styling/main.scss";
import { modalClick, closeModal, clickOutside } from "./modal";
const axios = require('axios').default;

const regeneratorRuntime = require("regenerator-runtime");

// const searchInput = document.querySelector('#search-input');
const searchInput = document.getElementById('search-input');
const mainSearchInput = document.querySelector('#main-search-input');
const searchContainer = document.querySelector('#search-container');
const searchResultsContainer = document.querySelector('#search-result-container');
const searchResults = document.querySelector('#search-results');
const scroopleSearchBtn = document.querySelector('#scroople-search-btn');
// const logo = document.getElementById('logo');
// const inputFilterContainer = document.getElementById('input-filter-container');
const tools = document.getElementById('tools');
// const tools = document.querySelector('#tools');
// const firstHeader = document.querySelector('#header');
// const secondHeader = document.querySelector('#header-tools');
// const secondSearchInput = document.querySelector('#search-input-2');


const filter = document.querySelector('#filter');
let excludeInput = document.querySelector('#exclude-input');
// let searchQuery = document.querySelector('#search-input').value;
const mealType = document.querySelector('#meal-type');
const diets = document.querySelector('#diets');
// const diets = document.querySelectorAll('input[name=diets]');


let searchQuery = '';

mainSearchInput.addEventListener('keypress', (e) => {
  // e.preventDefault();
  if (e.key === 'Enter') {
    searchQuery = mainSearchInput.value;
    fetchSearchResults(searchQuery);
    // fetchSearchResults();
  }
})

console.log(searchQuery);

scroopleSearchBtn.addEventListener('click', (e) => {
  // e.preventDefault();
  searchQuery = mainSearchInput.value;
  fetchSearchResults(searchQuery);
  // fetchSearchResults();
})

// FIRST GET REQUEST
function fetchSearchResults(searchQuery) {
// function fetchSearchResults() {
  axios({
    method: 'GET',
    url: `/recipes/${searchQuery}`
  })
  .then(res => {
    searchContainer.style.display = "none";
    generateResults(res.data.results)
    // searchContainer.classList.add('hidden'); **

    searchInput.value = searchQuery;

    // hiddenHeaders.classList.remove('hiddenHeaders'); **
    // visibility.forEach(ele => { **
    //   ele.style.visibility = 'visible';
    // });
    // document.getElementsByClassName('visibility').style.visibility = 'visible'; **

    document.getElementById('logo').classList.remove('visibility');
    document.getElementById('input-filter-container').classList.remove('visibility');
    document.getElementById('tools').classList.remove('visibility');
    
  })
  .catch(err => console.log(err))
}

let state = false;
tools.addEventListener('click', (e) => {
  console.log('click');
  console.log(state);
  if (!state) {
    state = true;
    console.log(state);
    document.getElementById('filter-container').classList.remove('visibility');
  } else {
    state = false;
    console.log(state);
    document.getElementById('filter-container').classList.add('visibility');
  }
  searchInput.value = searchQuery;
});

// SECOND GET REQUEST //

filter.addEventListener('click', () => {
  // e.preventDefault();
  let excludeQuery = excludeInput.value;
  let type = mealType.value;
  let diet = diets.value;
  // let diet = [];
  // for (const checkbox of diets) {
  //   if (checkbox.checked) {
  //     diet.push(checkbox.value);
  //   }
  // }
  fetchFilteredSearchResults(searchQuery, excludeQuery, type, diet);
})

excludeInput.addEventListener('keypress', (e) => {
  // e.preventDefault();
  let excludeQuery = excludeInput.value;
  let type = mealType.value;
  let diet = diets.value;
  if (e.key === 'Enter') {
    // let diet = [];
    // for (const checkbox of diets) {
    //   if (checkbox.checked) {
    //     diet.push(checkbox.value);
    //   }
    // }
    fetchFilteredSearchResults(searchQuery, excludeQuery, type, diet);
  }
})

function fetchFilteredSearchResults(searchQuery, excludeQuery, type, diet) {
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