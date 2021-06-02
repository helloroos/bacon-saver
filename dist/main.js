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
// const closeButton = document.querySelector('.close-btn');
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
    console.log(baseURL);
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
    filterOptions.innerHTML = `
    <div class="filter-options">
        <select name="type" class="type">
            <option disabled selected value> -- Type -- </option>
            <option value="bitcoin">Bitcoin</option>
        </select>
    
        <input type="checkbox" id="vegetarian" name="vegetarian" class="checkbox" value="">
        <label for="vegetarian">Vegetarian</label>

        <input type="checkbox" class="checkbox" value="vegan">
        <label for="vegan">Vegan</label>
        
        <input type="checkbox" class="checkbox" value="gluten%20free">
        <label for="gluten-free">Gluten free</label>

        <input type="checkbox" id="ketogenic" class="checkbox" value="ketogenic">
        <label for="ketogenic">Ketogenic</label>

        <input type="checkbox" id="lacto-vegetarian" class="checkbox" value="lacto%20vegetarian">
        <label for="lacto-vegetarian">Lacto-vegetarian</label>

        <input type="checkbox" id="ovo-vegetarian" class="checkbox" value="ovo%20vegetarian">
        <label for="ovo-vegetarian">Ovo-vegetarian</label>

        <input type="checkbox" id="pescetarian" class="checkbox" value="pescetarian">
        <label for="pescetarian">Pescetarian</label>

        <input type="checkbox" id="paleo" class="checkbox" value="paleo">
        <label for="paleo">Paleo</label>

        <input type="checkbox" id="primal" class="checkbox" value="primal">
        <label for="primal">Primal</label>

        <input type="checkbox" id="whole-30" class="checkbox" value="whole%2030">
        <label for="whole-30">Whole 30</label>
        
        <button type="submit">Filter</button>
    </div>`;

    let generatedHTML = ``;
    results.map(result => {
        generatedHTML +=
        //     `<div class="item">
        //      <img src=${result.image}>
        //      <div class="flex-container">
        //          <h1 class="title">${result.title}</h1>
        //          <a class="view-button" href=${result.sourceUrl}>View recipe</a>
        //      </div>
        //      <p class="item-data">Vegetarian Vegan Gluten Free</p>
        // </div>`

        `<div class="item">
            <img src="https://www.rachelphipps.com/wp-content/uploads/2019/02/Salmon-Sashimi-Instagram.jpg">
            <div class="flex-container">
                <h1 class="title">${result.name}</h1>
                <a class="view-btn" onClick=${openModal()} href="#">View recipe</a>
            </div>
            <p class="item-data">Vegetarian Vegan Gluten Free</p>
        </div>`
    })

    // for (let i = 0; i < results.length; i++) {
    //     const item = document.createElement('div');
    //     item.classList.add('item');


    //     if (i > paddingDays) {
    //         item.innerText = i - paddingDays;
    //         const eventForDay = events.find(e => e.date === dayString);

    //         if (i - paddingDays === day && nav === 0) {
    //             item.id = 'currentDay';
    //         }

    //         if (eventForDay) {
    //             const eventDiv = document.createElement('div');
    //             eventDiv.classList.add('event');
    //             eventDiv.innerText = eventForDay.title;
    //             item.appendChild(eventDiv);
    //         }

    //         item.addEventListener('click', () => openModal(dayString));
    //     } else {
    //         item.classList.add('padding');
    //     }

    //     calendar.appendChild(item);
        
    // }
    searchResultDiv.innerHTML = generatedHTML;
}

// function initButtons() {
//     document.querySelector('.close-btn').addEventListener('click', () => console.log('close'));
// }

// initButtons();