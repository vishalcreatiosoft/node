const mongoose = require('mongoose')

const registrationSchema = new mongoose.Schema({
    name : String,
    email : String,
    phone : Number,
    company : String,
    city : String,
    password : String,
    confirmpassword : String
})

module.exports = mongoose.model('registration',registrationSchema)