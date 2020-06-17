const mongoose = require("mongoose");
dbConnectionUrl = "mongodb://localhost:27017/wikiDB"
const db = [];

db.connect = function() {
    mongoose.connect(dbConnectionUrl, { useNewUrlParser: true, useUnifiedTopology: true }, function() {
        //console.log("DB Connected Successfully");
    })
}
db.close = function() {
    mongoose.connection.close();
    //console.log("DB Connection Closed Successfully");
}

const articleSchema = {
    title: String,
    content: String
}

const Article = mongoose.model("Article", articleSchema);

exports.db = db;
exports.Article = Article;