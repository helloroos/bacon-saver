// frontend -- what is getting webpacked

const express = require("express");
const app = express();
const path = require("path");

const axios = require('axios').default;

// require("dotenv").config();
const app_key = require('./config/keys').app_key;
const PORT = process.env.PORT || 8000; // process.env accesses heroku's environment variables

app.use(express.static("dist"));

app.get("/", (request, response) => {
  // res.sendFile(path.join(__dirname, "./dist/index.html"));
  response.sendFile(path.join(__dirname, "index.html"));
});

// route to get recipes based on ingredient(s)
app.get("/recipes/:searchQuery", (request, response) => {
  // make api call using axios
  const searchQuery = request.params.searchQuery;
  axios({
    method: 'GET',
    url: `https://api.spoonacular.com/recipes/complexSearch?apiKey=${app_key}&number=1000&addRecipeInformation=true&includeIngredients=${searchQuery}`
  })
    .then((res) => {
      response.send(res.data); // sends to frontend
    })
    .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
    // .catch(err => console.log(err))
  // .then((body) => {
  //     let results = JSON.parse(body);
  //     console.log(results); // logs to server
  //     response.send(results); // sends to frontend
  // });
});

// route to get recipes based on filtered input
app.get("/recipes/:searchQuery/filter", (request, response) => {
  const searchQuery = request.params.searchQuery;
  const excludeQuery = request.params.excludeQuery;
  const type = request.params.type;
  const diet = request.params.diet;
  let baseURL =
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${app_key}&number=1000&addRecipeInformation=true&includeIngredients=${searchQuery}`;
  if (excludeQuery) baseURL += `&excludeIngredients=${excludeQuery}`;
  if (type) baseURL += `&type=${type}`;
  if (diet) baseURL += `&diet=${diet}`;
  axios({
    method: 'GET',
    url: baseURL
  })
    .then((res) => {
      response.send(res.data);
    })
    .catch(err => console.log(err))
});

app.listen(PORT, () => {
  console.log(__dirname);
  console.log(`listening on ${PORT}`);
});