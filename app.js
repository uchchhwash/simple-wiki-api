const express = require("express");
const bodyParser = require("body-parser");
const model = require(__dirname + "/models/articles.js")

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
model.db.connect();

app.route("/articles")

.get(function(req, res) {

    let allArticles = [];

    model.Article.find({}, function(err, data) {
        if (err) {
            console.log(err);
        } else {
            res.send(data)

        }
    })
})

.post(function(req, res) {
    const newArticle = new model.Article({
        title: req.body.title,
        content: req.body.content
    })

    newArticle.save();
    res.send("Success");
})

.delete(function(req, res) {
    model.Article.deleteMany({}, function(err) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.send("Collection Deleted Successfully");
        }
    })
});



app.route("/articles/:articleTitle")

.get(function(req, res) {
    model.Article.find({ title: req.params.articleTitle }, function(err, data) {

        if (!err) {
            res.send(data);
        } else {
            res.send(err);
        }
    })
})

.put(function(req, res) {
    model.Article.update({ title: req.params.articleTitle }, {
            title: req.body.title,
            content: req.body.content
        }, { overwrite: true },
        function(err, result) {
            if (!err) {
                res.send("Updated Article");
            } else {
                res.send("Update Article Failed");
            }
        }
    )
})

.patch(function(req, res) {
    model.Article.update({ title: req.params.articleTitle }, { $set: req.body },
        function(err, result) {
            if (!err) {
                res.send("Updated Article");
            } else {
                res.send("Update Article Failed");
            }
        }
    )
})

.delete(function(req, res) {
    model.Article.findOneAndDelete({ title: req.params.articleTitle }, function(err, result) {
        if (!err) {
            res.send("Deleted Article");
        } else {
            res.send("Delete Article Failed");
        }
    })
});

app.listen(3000, function() {
    console.log("server is running on http://localhost:3000")
})