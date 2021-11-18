const User = require('../models/user_model');

const users = {};

users.saveUser = async(data)=>{
    try{
        const newUser = new User(data);
        const saveNewUser = newUser.save();
    }catch(e){
        console.log('Error while saving data',e);
    }
}

users.getData = async(city)=>{
    try{
        const getName = await User.find({userCity : city})
        //console.log(getName)
        return getName;
    }catch(e){
        console.log('error while fetching',e);
    }
}


module.exports = users;