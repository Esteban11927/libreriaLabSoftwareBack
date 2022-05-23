const mongoose = require('mongoose');

let book = mongoose.Schema({
    title: String,
    author: String,
    issn: String,
    publicationDate: Date,
    genre: String,
    pages: Number,
    editorial: String,
    language: String,
    price: Number,
    new: Boolean
})

module.exports = mongoose.model("Book", book);