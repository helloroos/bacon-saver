// frontend -- what is getting webpacked

const express = require("express");
const app = express();
const path = require("path");

const axios = require('axios').default;

// require("dotenv").config();
const app_key = require('./config/keys').app_key;
const PORT = process.env.PORT || 8000; // process.env accesses heroku's environment variables

app.use(express.static("dist"));

app.get("/", (request, res) => {
    res.sendFile(path.join(__dirname, "./dist/index.html"));
});

// create route to get single book by its isbn
app.get("/recipes/:query", (request, response) => {
    // make api call using axios
    let searchQuery = request.params.query;
    axios({
        method: 'GET',
        url: `https://api.spoonacular.com/recipes/complexSearch?apiKey=${app_key}&number=1000&addRecipeInformation=true&includeIngredients=${searchQuery}`
    })
        .then((res) => {
            response.send(res.data); // sends to frontend
        })
        // .then((body) => {
        //     let results = JSON.parse(body);
        //     console.log(results); // logs to server
        //     response.send(results); // sends to frontend
        // });
});

app.listen(PORT, () => {
    console.log(__dirname);
    console.log(`listening on ${PORT}`);
});