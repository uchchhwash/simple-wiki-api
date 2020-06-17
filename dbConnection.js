const mongoose = require("mongoose");

const dbConnectionUrl = "mongodb://localhost:27017/wikiDB";
exports.mongoose = mongoose.connect(dbConnectionUrl, { useNewUrlParser: true, useUnifiedTopology: true }, function() {
    console.log("DB Connected Successfully");
})