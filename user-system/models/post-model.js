const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    postmsg : String
})


module.exports = mongoose.model('post',postSchema)