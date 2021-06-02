// const regeneratorRuntime = require("regenerator-runtime");
// const app_key = require('../config/keys').app_key;
// const searchForm = document.querySelector('.searchForm');
// const filterForm = document.querySelector('.filterForm');
// const searchResultDiv = document.querySelector('.search-result');
// const container = document.querySelector('.container');
// let searchQuery = '';

// searchForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     searchQuery = e.target.querySelector('.searchQuery').value;
//     fetchSearchResults(searchQuery);
//     searchQuery = '';
// })

// async function fetchSearchResults(searchQuery) {
//     const baseURL = 
//         `https://api.spoonacular.com/recipes/complexSearch?apiKey=${app_key}&number=1000&addRecipeInformation=true&includeIngredients=${searchQuery}`
//     const response = await fetch(baseURL);
//     const data = await response.json();
//     generateHTML(data.results);
//     console.log(data);
// }

// filterForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const urlParams = new URLSearchParams(window.location.search);
//     searchQuery = urlParams.get('includeIngredients');
//     console.log(searchQuery);
//     let excludeQuery = e.target.querySelector('.excludeQuery').value;
//     let type = e.target.querySelector('.type').value;
//     fetchFilteredSearchResults(searchQuery, excludeQuery, type);
//     excludeQuery = '';
// })

// async function fetchFilteredSearchResults(searchQuery, excludeQuery, type) {
//     const baseURL =
//         `https://api.spoonacular.com/recipes/complexSearch?apiKey=${app_key}&number=1000&addRecipeInformation=true&includeIngredients=${searchQuery}&excludeIngredients=${excludeQuery}&type=${type}`
//     const response = await fetch(baseURL);
//     const data = await response.json();
//     generateHTML(data.results);
//     console.log(data);
// }

// function generateHTML(results) {
//     filterForm.innerHTML = `
//         <input class="excludeQuery" type="text" placeholder="Exclude comma separated ingredients">
//         <!-- <ion-icon name="search"></ion-icon> -->
//         <i class="fa fa-search" aria-hidden="true"></i>
//         <div class="filter-options">
//         <label for="type">Choose a type:</label>
//             <select name="type" class="type">
//                 <option value="main%20course">Main course</option>
//                 <option value="side%20dish">Side dish</option>
//                 <option value="dessert">Dessert</option>
//                 <option value="appetizer">Appetizer</option>
//                 <option value="salad">Salad</option>
//                 <option value="bread">Bread</option>
//                 <option value="breakfast">Breakfast</option>
//                 <option value="soup">Soup</option>
//                 <option value="beverage">Beverage</option>
//                 <option value="sauce">Sauce</option>
//                 <option value="marinade">Marinade</option>
//                 <option value="fingerood">Fingerfood</option>
//                 <option value="snack">Snack</option>
//                 <option value="drink">Drink</option>
//             </select>
//             <button type="submit">Filter</button>
//         </div>`;
//     let generatedHTML = ``;
//     results.map(result => {
//         generatedHTML += 
//         `<div class="item">
//             <img src=${result.image}>
//             <div class="flex-container">
//                 <h1 class="title">${result.title}</h1>
//                 <a class="view-button" href=${result.sourceUrl}>View recipe</a>
//             </div>
//             <p class="item-data">Vegetarian Vegan Gluten Free</p>
//         </div>`
//     })
//     searchResultDiv.innerHTML = generatedHTML;
// }


import "./main.css";

// function generateHTML(results) {
//     filterInputDiv.innerHTML = `
//     <input class="excludeQuery" type="text" placeholder="Exclude comma separated ingredients">
//     <!-- <ion-icon name="search"></ion-icon> -->
//     <i class="fa fa-search" aria-hidden="true"></i>`;

//     filterOptions.innerHTML = `
//     <div class="filter-options">
//     <select name="type" class="type">
//     <option disabled selected value> -- Type -- </option>
//     <option value="bitcoin">Bitcoin</option>
//     </select>
//     <input type="checkbox" class="checkbox" value="vegetarian">
//     <label for="vegetarian">Vegetarian</label>
//     <input type="checkbox" class="checkbox" value="vegan">
//     <label for="vegan">Vegan</label>
//     <input type="checkbox" class="checkbox" value="gluten%20free">
//     <label for="gluten-free">Gluten free</label>
//     <button type="submit">Filter</button>
//     </div>`;

//     let generatedHTML = ``;
//     results.map(result => {
//         generatedHTML += 
//         `<div class="item">
//             <img src="https://www.rachelphipps.com/wp-content/uploads/2019/02/Salmon-Sashimi-Instagram.jpg">
//             <div class="flex-container">
//                 <h1 class="title">${result.name}</h1>
//                 <a class="view-button" href="#">View recipe</a>
//             </div>
//             <p class="item-data">Vegetarian Vegan Gluten Free</p>
//         </div>`
//     })
//     searchResultDiv.innerHTML = generatedHTML;
// }