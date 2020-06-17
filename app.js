const express = require("express");
const bodyParser = require("body-parser");
const article = require(__dirname + "/models/articles.js")

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))


app.listen(3000, function() {
    console.log("server is running on http://localhost:3000")
})