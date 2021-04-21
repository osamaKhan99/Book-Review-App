const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    rating:{
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    review:{
        type: String,
        default: "n/a"
    },
    pages:{
        type: Number,
        default: "n/a"
    },
    price:{
        type: String,
        default: "n/a"
    },
    ownerId:{
        type: String,
        required: true
    }
},{timestamps:true})

const Book = mongoose.model('Book',bookSchema)

module.exports = { Book }