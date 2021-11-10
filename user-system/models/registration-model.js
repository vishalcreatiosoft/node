const mongoose = require('mongoose')
const validator =  require('validator')

const registrationSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    email : {
        type : String,
        required : true,
        trim : true,
        lowercase : true,
        unique : true,
        
    },
    phone : {
        type : Number,
        maxlength : 10,
        required : true
    },
    company : {
        type : String,
        required : true,
        trim : true
    },
    city : {
        type : String,
        required : true,
        trim : true
    },
    password : {
        type : String,
        required : true,
        trim : true,
        
    },
    confirmpassword : {
        type : String,
        trim :  true       
    },
    image : String
})



module.exports = mongoose.model('registration',registrationSchema)
