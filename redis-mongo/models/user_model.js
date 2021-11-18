const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName : {
        type : String,
        trim : true
    },
    userCity : {
        type : String,
        trim : true
    }
})

module.exports = mongoose.model('user',userSchema);