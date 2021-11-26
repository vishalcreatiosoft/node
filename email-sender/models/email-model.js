const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
    sender : {
        type : String,
        trim : true,
        required : true
    },
    email : {
        type : String,
        trim : true,
        required : true
    },
    content : {
        type : String,
        trim : true,
        required : true
    }
})





module.exports = mongoose.model('email',emailSchema);