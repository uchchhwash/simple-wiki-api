const mongoose = require(require.main.path + "/dbConnection.js")


const articleSchema = {
    title: String,
    content: String
}
exports.test = function() {
    console.log("this is a test fund")
}