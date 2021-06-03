import "./main.css";

const regeneratorRuntime = require("regenerator-runtime");
const app_key = require('../config/keys').app_key;

// SEARCH ELEMENTS IN HTML FILE
// const container = document.querySelector('.container');
// const searchContainer = document.querySelector('.search-container');
const searchForm = document.querySelector('.searchForm');
const filterForm = document.querySelector('.filterForm');
const filterInputDiv = document.querySelector('.filter-input-div');
const filterOptions = document.querySelector('.filter-options');
const searchResultDiv = document.querySelector('.search-result');

// MODAL ELEMENTS IN HTML FILE
const viewRecipeModal = document.getElementById('view-recipe-modal');
const modalBackdrop = document.getElementById('modal-backdrop');
const modal = document.querySelector('.modal');
const viewButton = document.querySelector('.view-btn');

// GLOBAL CONSTANTS
let searchQuery = '';
// let recipe = null;

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('.searchQuery').value;
    fetchSearchResults(searchQuery);

    //     searchQuery = '';
})

async function fetchSearchResults(searchQuery) {
    // const baseURL =
    //     `https://api.spoonacular.com/recipes/complexSearch?apiKey=${app_key}&number=1000&addRecipeInformation=true&includeIngredients=${searchQuery}`
    // const response = await fetch(baseURL);
    // const data = await response.json();
    // generateHTML(data.results);
    // console.log(data);

    const baseURL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${searchQuery}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    const response = await fetch(baseURL);
    const data = await response.json();
    generateHTML(data);
    console.log(data);
}

filterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let excludeQuery = e.target.querySelector('.excludeQuery').value;
    let type = e.target.querySelector('.type').value;
    let diet = []
    fetchFilteredSearchResults(searchQuery, excludeQuery, type, diet);
    // excludeQuery = '';
})

async function fetchFilteredSearchResults(searchQuery, excludeQuery, type, diet) {
    // const baseURL =
    //     `https://api.spoonacular.com/recipes/complexSearch?apiKey=${app_key}&number=1000&addRecipeInformation=true&includeIngredients=${searchQuery}&excludeIngredients=${excludeQuery}&type=${type}&diet=${diet}`  
    // console.log(baseURL);
    // const response = await fetch(baseURL);
    // const data = await response.json();
    // generateHTML(data.results);
    // console.log(data);

    const baseURL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${type}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    const response = await fetch(baseURL);
    const data = await response.json();
    generateHTML(data);
    console.log(data);
}

function openModal() {
    viewRecipeModal.style.display = 'block';
    modalBackdrop.style.display = 'block';
}

function closeModal() {
    viewRecipeModal.style.display = 'none';
    modalBackdrop.style.display = 'none';
}

window.addEventListener('click', clickOutside)

function clickOutside(e) {
    if (e.target == modal) {
        viewRecipeModal.style.display = 'none';
        modalBackdrop.style.display = 'none';
    }
}

function generateHTML(results) {
    filterInputDiv.innerHTML = `
    <input class="excludeQuery" type="text" placeholder="Exclude comma separated ingredients">
    <!-- <ion-icon name="search"></ion-icon> -->
    <i class="fa fa-search" aria-hidden="true"></i>`;

    // filterOptions.innerHTML = `
    // <div class="filter-options">
    // <select name="type" class="type">
    // <option disabled selected value> -- Type -- </option>
    // <option value="bitcoin">Bitcoin</option>
    // </select>
    // <input type="checkbox" class="checkbox" value="bitcoin">
    // <label for="bitcoin">Bitcoin</label>
    // <button type="submit">Filter</button>
    // </div>`;

    // Add tooltip overlay

    const diets = ['Vegetarian', 'Vegan', 'Ketogenic', 'Lacto-Vegetarian', 'Ovo-Vegetarian', 'Gluten Free', 'Pescetarian', 'Paleo', 'Primal', 'Whole-30'];
    let inputOptions = ``
    for (const diet of diets) {
        inputOptions += `
        <input type="checkbox" id="${diet.toLowerCase()}" name="diets" class="checkbox" value="${diet.toLowerCase().replace('-', '%20')}">
        <label for="${diet.toLowerCase()}">${diet}</label>`
    }

    filterOptions.innerHTML = `
    <div class="filter-options">

        ${inputOptions}

        <select name="type" class="type">
            <option disabled selected value> -- Type -- </option>
            <option value="bitcoin">Bitcoin</option>
        </select>
        
        <button type="submit">Filter</button>
    </div>`;

    let generatedHTML = ``;
    results.forEach(result => {
        const item = 
        `<button class="item">
            <img src="https://www.rachelphipps.com/wp-content/uploads/2019/02/Salmon-Sashimi-Instagram.jpg">
            <div class="flex-container">
                <h1 class="title">${result.name}</h1>
            </div>
            <p class="item-data">Vegetarian Vegan Gluten Free</p>
            <div class="inner-detail" style="display: none">
                <h1>${result.name}</h1>
            </div>
        </button>`
        generatedHTML += item;
    });
    // results.map(result => {
        //     generatedHTML +=
        //     //     `<div class="item">
        //     //      <img src=${result.image}>
        //     //      <div class="flex-container">
        //     //          <h1 class="title">${result.title}</h1>
        //     //          <a class="view-button" href=${result.sourceUrl}>View recipe</a>
        //     //      </div>
        //     //      <p class="item-data">Vegetarian Vegan Gluten Free</p>
        //     // </div>`
        // })
    searchResultDiv.innerHTML = generatedHTML;
    for (const button of searchResultDiv.querySelectorAll('button')) {
        
        button.addEventListener('click', e => {
            viewRecipeModal.querySelector('.modal-content-inner').innerHTML = button.querySelector('.inner-detail').innerHTML;
            openModal();
        });
    }
    // searchResultDiv.querySelectorAll('button').addEventListener('click', (e) => {
    //     // if ((e.target && e.currentTarget.matches("div.item"))) {
    //     // if ((e.target && e.target.matches("div.item")) || (e.target && e.target.matches("img")) || (e.target && e.target.matches("title")) || (e.target && e.target.matches("item-data"))) {
    //     openModal();
    //     // }
    // })
}

function initButtons() {
    document.querySelector('.close-btn').addEventListener('click', () => {
        closeModal();
    });
}

initButtons();