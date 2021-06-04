// // const regeneratorRuntime = require("regenerator-runtime");
// // const app_key = require('../config/keys').app_key;
// // const searchForm = document.querySelector('.searchForm');
// // const filterForm = document.querySelector('.filterForm');
// // const searchResultDiv = document.querySelector('.search-result');
// // const container = document.querySelector('.container');
// // let searchQuery = '';

// // searchForm.addEventListener('submit', (e) => {
// //     e.preventDefault();
// //     searchQuery = e.target.querySelector('.searchQuery').value;
// //     fetchSearchResults(searchQuery);
// //     searchQuery = '';
// // })

// // async function fetchSearchResults(searchQuery) {
// //     const baseURL = 
// //         `https://api.spoonacular.com/recipes/complexSearch?apiKey=${app_key}&number=1000&addRecipeInformation=true&includeIngredients=${searchQuery}`
// //     const response = await fetch(baseURL);
// //     const data = await response.json();
// //     generateHTML(data.results);
// //     console.log(data);
// // }

// // filterForm.addEventListener('submit', (e) => {
// //     e.preventDefault();
// //     const urlParams = new URLSearchParams(window.location.search);
// //     searchQuery = urlParams.get('includeIngredients');
// //     console.log(searchQuery);
// //     let excludeQuery = e.target.querySelector('.excludeQuery').value;
// //     let type = e.target.querySelector('.type').value;
// //     fetchFilteredSearchResults(searchQuery, excludeQuery, type);
// //     excludeQuery = '';
// // })

// // async function fetchFilteredSearchResults(searchQuery, excludeQuery, type) {
// //     const baseURL =
// //         `https://api.spoonacular.com/recipes/complexSearch?apiKey=${app_key}&number=1000&addRecipeInformation=true&includeIngredients=${searchQuery}&excludeIngredients=${excludeQuery}&type=${type}`
// //     const response = await fetch(baseURL);
// //     const data = await response.json();
// //     generateHTML(data.results);
// //     console.log(data);
// // }

// // function generateHTML(results) {
// //     filterForm.innerHTML = `
// //         <input class="excludeQuery" type="text" placeholder="Exclude comma separated ingredients">
// //         <!-- <ion-icon name="search"></ion-icon> -->
// //         <i class="fa fa-search" aria-hidden="true"></i>
// //         <div class="filter-options">
// //         <label for="type">Choose a type:</label>
// //             <select name="type" class="type">
// //                 <option value="main%20course">Main course</option>
// //                 <option value="side%20dish">Side dish</option>
// //                 <option value="dessert">Dessert</option>
// //                 <option value="appetizer">Appetizer</option>
// //                 <option value="salad">Salad</option>
// //                 <option value="bread">Bread</option>
// //                 <option value="breakfast">Breakfast</option>
// //                 <option value="soup">Soup</option>
// //                 <option value="beverage">Beverage</option>
// //                 <option value="sauce">Sauce</option>
// //                 <option value="marinade">Marinade</option>
// //                 <option value="fingerood">Fingerfood</option>
// //                 <option value="snack">Snack</option>
// //                 <option value="drink">Drink</option>
// //             </select>
// //             <button type="submit">Filter</button>
// //         </div>`;
// //     let generatedHTML = ``;
// //     results.map(result => {
// //         generatedHTML += 
// //         `<div class="item">
// //             <img src=${result.image}>
// //             <div class="flex-container">
// //                 <h1 class="title">${result.title}</h1>
// //                 <a class="view-button" href=${result.sourceUrl}>View recipe</a>
// //             </div>
// //             <p class="item-data">Vegetarian Vegan Gluten Free</p>
// //         </div>`
// //     })
// //     searchResultDiv.innerHTML = generatedHTML;
// // }


// import "./main.css";

// // function generateHTML(results) {
// //     filterInputDiv.innerHTML = `
// //     <input class="excludeQuery" type="text" placeholder="Exclude comma separated ingredients">
// //     <!-- <ion-icon name="search"></ion-icon> -->
// //     <i class="fa fa-search" aria-hidden="true"></i>`;

// //     filterOptions.innerHTML = `
// //     <div class="filter-options">
// //     <select name="type" class="type">
// //     <option disabled selected value> -- Type -- </option>
// //     <option value="bitcoin">Bitcoin</option>
// //     </select>
// //     <input type="checkbox" class="checkbox" value="vegetarian">
// //     <label for="vegetarian">Vegetarian</label>
// //     <input type="checkbox" class="checkbox" value="vegan">
// //     <label for="vegan">Vegan</label>
// //     <input type="checkbox" class="checkbox" value="gluten%20free">
// //     <label for="gluten-free">Gluten free</label>
// //     <button type="submit">Filter</button>
// //     </div>`;

// //     let generatedHTML = ``;
// //     results.map(result => {
// //         generatedHTML += 
// //         `<div class="item">
// //             <img src="https://www.rachelphipps.com/wp-content/uploads/2019/02/Salmon-Sashimi-Instagram.jpg">
// //             <div class="flex-container">
// //                 <h1 class="title">${result.name}</h1>
// //                 <a class="view-button" href="#">View recipe</a>
// //             </div>
// //             <p class="item-data">Vegetarian Vegan Gluten Free</p>
// //         </div>`
// //     })
// //     searchResultDiv.innerHTML = generatedHTML;
// // }

// import "./main.css";

// const regeneratorRuntime = require("regenerator-runtime");
// const app_key = require('../config/keys').app_key;

// // SEARCH ELEMENTS IN HTML FILE
// // const container = document.querySelector('.container');
// // const searchContainer = document.querySelector('.search-container');
// const searchForm = document.querySelector('.searchForm');
// const filterForm = document.querySelector('.filterForm');
// const filterInputDiv = document.querySelector('.filter-input-div');
// const filterOptions = document.querySelector('.filter-options');
// const searchResultDiv = document.querySelector('.search-result');

// // MODAL ELEMENTS IN HTML FILE
// const viewRecipeModal = document.getElementById('view-recipe-modal');
// const modalBackdrop = document.getElementById('modal-backdrop');
// const modal = document.querySelector('.modal');
// const viewButton = document.querySelector('.view-btn');

// // GLOBAL CONSTANTS
// let searchQuery = '';

// searchForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     searchQuery = e.target.querySelector('.searchQuery').value;
//     fetchSearchResults(searchQuery);

//     //     searchQuery = '';
// })

// async function fetchSearchResults(searchQuery) {
//     // const baseURL =
//     //     `https://api.spoonacular.com/recipes/complexSearch?apiKey=${app_key}&number=1000&addRecipeInformation=true&includeIngredients=${searchQuery}`
//     // const response = await fetch(baseURL);
//     // const data = await response.json();
//     // generateHTML(data.results);
//     // console.log(data);

//     const baseURL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${searchQuery}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
//     const response = await fetch(baseURL);
//     const data = await response.json();
//     generateHTML(data);
//     console.log(data);
// }

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
//     searchQuery = 'cilantro' // TO BE REMOVED
//     fetchFilteredSearchResults(searchQuery, excludeQuery, type, diet);
// })

// async function fetchFilteredSearchResults(searchQuery, excludeQuery, type, diet) {
//     const baseURL =
//         `https://api.spoonacular.com/recipes/complexSearch?apiKey=${app_key}&number=1000&addRecipeInformation=true&includeIngredients=${searchQuery}`;
//     if (excludeQuery) baseURL += `&excludeIngredients=${excludeQuery}`;
//     if (type) baseURL += `&type=${type}`;
//     if (diet) baseURL += `&diet=${diet}`;
//     const response = await fetch(baseURL);
//     const data = await response.json();
//     generateHTML(data.results);
//     console.log(data);

//     // const baseURL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${type}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
//     // const response = await fetch(baseURL);
//     // const data = await response.json();
//     // generateHTML(data);
//     // console.log(data);
// }

// function openModal() {
//     viewRecipeModal.style.display = 'block';
//     modalBackdrop.style.display = 'block';
// }

// function closeModal() {
//     viewRecipeModal.style.display = 'none';
//     modalBackdrop.style.display = 'none';
// }

// // window.addEventListener('click', clickOutside)

// // function clickOutside(e) {
// //     if (e.target == modal) {
// //         viewRecipeModal.style.display = 'none';
// //         modalBackdrop.style.display = 'none';
// //     }
// // }

// function generateHTML(results) {
//     filterInputDiv.innerHTML = `
//     <input class="excludeQuery" type="text" placeholder="Exclude these comma separated ingredients">
//     <!-- <ion-icon name="search"></ion-icon> -->
//     <i class="fa fa-search" aria-hidden="true"></i>`;

//     const diets = [
//         ['Gluten Free', 'Eliminating gluten means avoiding wheat, barley, rye, and other gluten-containing grains and foods made from them (or that may have been cross contaminated).'],
//         ['Ketogenic', 'The keto diet is based more on the ratio of fat, protein, and carbs in the diet rather than specific ingredients. Generally speaking, high fat, protein-rich foods are acceptable and high carbohydrate foods are not.'],
//         ['Vegetarian', 'No ingredients may contain meat or meat by-products, such as bones or gelatin.'],
//         ['Lacto-Vegetarian', 'All ingredients must be vegetarian and none of the ingredients can be or contain egg.'],
//         ['Ovo-Vegetarian', 'All ingredients must be vegetarian and none of the ingredients can be or contain dairy.'],
//         ['Vegan', 'No ingredients may contain meat or meat by-products, such as bones or gelatin, nor may they contain eggs, dairy, or honey.'],
//         ['Pescetarian', 'Everything is allowed except meat and meat by-products - some pescetarians eat eggs and dairy, some do not.'],
//         ['Paleo', 'Allowed ingredients include meat (especially grass fed), fish, eggs, vegetables, some oils (e.g. coconut and olive oil), and in smaller quantities, fruit, nuts, and sweet potatoes. We also allow honey and maple syrup (popular in Paleo desserts, but strict Paleo followers may disagree). Ingredients not allowed include legumes (e.g. beans and lentils), grains, dairy, refined sugar, and processed foods.'],
//         ['Primal', 'Very similar to Paleo, except dairy is allowed - think raw and full fat milk, butter, ghee, etc.'],
//         ['Whole-30', 'Allowed ingredients include meat, fish/seafood, eggs, vegetables, fresh fruit, coconut oil, olive oil, small amounts of dried fruit and nuts/seeds. Ingredients not allowed include added sweeteners (natural and artificial, except small amounts of fruit juice), dairy (except clarified butter or ghee), alcohol, grains, legumes (except green beans, sugar snap peas, and snow peas), and food additives, such as carrageenan, MSG, and sulfites.']];

//     let checkboxOptions = ``
//     // Add tooltip overlay
//     for (const diet of diets) {
//         checkboxOptions += `
//         <input type="checkbox" id="${diet[0].toLowerCase()}" name="diets" class="checkbox" value="${diet[0].toLowerCase().replace('-', '%20')}">
//         <label for="${diet[0].toLowerCase()}">${diet[0].replace('-', ' ')}</label>`
//     }

//     const mealTypes = ['Main course', 'Side dish', 'Dessert', 'Appetizer', 'Salad', 'Bread', 'Breakfast', 'Soup', 'Beverage', 'Sauce', 'Marinade', 'Fingerfood', 'Snack', 'Drink'].sort();
//     let selectOptions = ``
//     for (const mealType of mealTypes) {
//         selectOptions += `
//         <option value=${mealType.toLowerCase()}>${mealType}</option>
//         `
//     }

//     filterOptions.innerHTML = `
//     <div class="filter-options">

//         ${checkboxOptions}

//         <select name="type" class="type">
//             <option disabled selected value> Meal type </option>
//             ${selectOptions}
//         </select>
        
//         <button type="submit">Filter</button>
//     </div>`;

//     let generatedHTML = ``;
//     results.forEach(result => {
//         const vegetarian = 
//         const item =
//             `<button class="item">
//             <img src=${result.image}>
//             <div class="flex-container">
//             <h1 class="title">${result.name}</h1>
//             </div>
//             <p class="item-data">Vegetarian Vegan Gluten Free</p>
//             <div class="inner-detail" style="display: none">
//                 <h1>${result.name}</h1>
//                 <img src=${result.image}>
//             </div>
//         </button>`
//         generatedHTML += item;
//     });
//     searchResultDiv.innerHTML = generatedHTML;
//     for (const button of searchResultDiv.querySelectorAll('button')) {

//         button.addEventListener('click', e => {
//             viewRecipeModal.querySelector('.modal-content-inner').innerHTML = button.querySelector('.inner-detail').innerHTML;
//             openModal();
//         });
//     }
// }

// function initButtons() {
//     document.querySelector('.close-btn').addEventListener('click', () => {
//         closeModal();
//     });
// }

// initButtons();