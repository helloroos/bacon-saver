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
const firstHeader = document.querySelector('#header');
const secondHeader = document.querySelector('#header-tools');
const secondSearchInput = document.querySelector('#search-input-2');
let state = false;

tools.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(e.target);
  if (!state) {
    state = true;
    firstHeader.innerHTML = `<a href="#" id="logo" class="header-links">scroople</a>
        <div id="input-filter-container">
          <div id="input-container">
            <i class="fas fa-search"></i>
            <input id="search-input-2" type="text">
            <i class="fas fa-times"></i>
          </div>
          <button id="tools">tools</button>
        </div>
        <a href="https://github.com/michelleroos" id="github" class="header-links" target="_blank">github</a>
        <a href="https://www.linkedin.com/in/roosmichelle/" id="linkedin" class="header-links"
          target="_blank">linkedin</a>
        <a href="https://firebasestorage.googleapis.com/v0/b/scroople-25727.appspot.com/o/Michelle%20Roos%20-%20Resume.pdf?alt=media&token=04dc0414-21f1-4d24-af4e-5a49eceb3371"
          id="resume" class="header-links" target="_blank" download><i class="far fa-file"></i></a>
        <a href="#" id="portfolio" class="header-links" target="_blank">
          <div id="resume-container">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/scroople-25727.appspot.com/o/profile.jpeg?alt=media&token=19f195d0-e512-4afa-9a96-be6e9193830d"
              alt="michelles-portfolio">
          </div>
        </a>

        <select name="meal-type" id="meal-type" class="meal-type">
          <option disabled selected value> Meal type </option>
          <option value="main course">main course</option>
          <option value="soup">soup</option>
          <option value="breakfast">breakfast</option>
        </select>

        <div id="filter-container">

          <div id="exclude-container">
            <i class="fas fa-ban"></i>
            <input id="exclude-input" type="text" placeholder="Exclude these ingredients">
          </div>

          <div id="checkboxes">
            <div class="checkbox-container">
              <input type="checkbox" id="diets" name="diets" value="vegan">
              <label for="vehicle1"> vegan</label>
            </div>

            <div class="checkbox-container">
              <input type="checkbox" id="diets" name="diets" value="vegetarian">
              <label for="vehicle1"> vegetarian</label>
            </div>

            <div class="checkbox-container">
              <input type="checkbox" id="diets" name="diets" value="gluten-free">
              <label for="vehicle1"> gluten-free</label>
            </div>

            <div class="checkbox-container">
              <input type="checkbox" id="diets" name="diets" value="ketogenic">
              <label for="vehicle1"> keto</label>
            </div>

            <div class="checkbox-container">
              <input type="checkbox" id="diets" name="diets" value="lacto-vegetarian">
              <label for="vehicle1"> lacto-veggie</label>
            </div>

            <div class="checkbox-container">
              <input type="checkbox" id="diets" name="diets" value="ovo-vegetarian">
              <label for="vehicle1"> ovo-veggie</label>
            </div>

            <div class="checkbox-container">
              <input type="checkbox" id="diets" name="diets" value="paleo">
              <label for="vehicle1"> paleo</label>
            </div>

            <div class="checkbox-container">
              <input type="checkbox" id="diets" name="diets" value="primal">
              <label for="vehicle1"> primal</label>
            </div>

            <div class="checkbox-container">
              <input type="checkbox" id="diets" name="diets" value="whole-30">
              <label for="vehicle1"> whole-30</label>
            </div>

            <div class="checkbox-container">
              <input type="checkbox" id="diets" name="diets" value="pescetarian">
              <label for="vehicle1"> pescetarian</label>
            </div>
          </div>
        </div>

        <button id="filter" class="btns"><i class="fas fa-filter"></i> filter</button>`;
    secondSearchInput.value = searchQuery;
  } else {
    state = false;
    firstHeader.innerHTML = `<a href="#" id="logo" class="header-links visibility">scroople</a>
        <div id="input-filter-container">
          <div id="input-container" class="visibility">
            <i class="fas fa-search"></i>
            <input id="search-input" type="text">
            <i class="fas fa-times"></i>
          </div>
          <button id="tools" class="visibility">tools</button>
        </div>
        <a href="https://github.com/michelleroos" id="github" class="header-links" target="_blank">github</a>
        <a href="https://www.linkedin.com/in/roosmichelle/" id="linkedin" class="header-links"
          target="_blank">linkedin</a>
        <a href="https://firebasestorage.googleapis.com/v0/b/scroople-25727.appspot.com/o/Michelle%20Roos%20-%20Resume.pdf?alt=media&token=04dc0414-21f1-4d24-af4e-5a49eceb3371"
          id="resume" class="header-links" target="_blank" download><i class="far fa-file"></i></a>
        <a href="#" id="portfolio" class="header-links" target="_blank">
          <div id="resume-container">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/scroople-25727.appspot.com/o/profile.jpeg?alt=media&token=19f195d0-e512-4afa-9a96-be6e9193830d"
              alt="michelles-portfolio">
          </div>
        </a>`;
    searchInput.value = searchQuery;
  }
});