const { ObjectId, ObjectID } = require('bson')
const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    _id : Number,
    name : String,
    company : String,
    price : Number,
    category : String
})

module.exports = mongoose.model('product', productSchema)