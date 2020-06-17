const express = require("express");
const bodyParser = require("body-parser");
const model = require(__dirname + "/models/articles.js")

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/articles", function(req, res) {
    model.db.connect();
    let allArticles = [];

    model.Article.find({}, function(err, data) {
        if (err) {
            console.log(err);
        } else {
            res.send(data)
            model.db.close()
        }
    })
})

app.post("/articles", function(req, res) {
    model.db.connect();

    const newArticle = new model.Article({
        title: req.body.title,
        content: req.body.content
    })

    newArticle.save();
    res.send("Success");
})


app.listen(3000, function() {
    console.log("server is running on http://localhost:3000")
})