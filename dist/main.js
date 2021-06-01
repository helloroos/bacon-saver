import "./main.css";
const regeneratorRuntime = require("regenerator-runtime");
const app_key = require('../config/keys').app_key;
const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('.search-result');
const container = document.querySelector('.container');
let searchQuery = '';


searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    fetchAPI(searchQuery);
})

async function fetchAPI(searchQuery) {
    const baseURL = 
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${app_key}&number=1000&includeIngredients=${searchQuery}&addRecipeInformation=true`
        // type=main-course&
    const response = await fetch(baseURL);
    const data = await response.json();
    generateHTML(data.results)
    console.log(data);
}

function generateHTML(results) {
    let generatedHTML = '';
    results.map(result => {
        generatedHTML += 
        `<div class="item">
            <img src=${result.image}>
            <div class="flex-container">
                <h1 class="title">${result.title}</h1>
                <a class="view-button" href=${result.sourceUrl}>View recipe</a>
            </div>
            <p class="item-data">Calories: 120</p>
        </div>`
    })
    searchResultDiv.innerHTML = generatedHTML;
}