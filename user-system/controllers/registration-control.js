const Registration = require('../models/registration-model')
const Post = require('../models/post-model')

const userRegistration = {}

userRegistration.saveRegistration = async(userData)=>{
    try{
        const register = new Registration(userData)
        const saveData = await register.save() 

    }catch(e){
        console.log('Registration failed',e)
    }
}

userRegistration.userLogin = async(email, password)=>{
    try{
        const checkUser = await Registration.find({email : email, password : password})
        if(checkUser.length == 0){
            return 0
        }
        else{
            return checkUser
        }
        

    }catch(e){
        console.log('Invalid Credentials',e)
    }
}

userRegistration.updateData = async(userData)=>{
    try{
        const update = await Registration.updateOne({email : userData.email}, {name : userData.name, phone : userData.phone, company : userData.company, city : userData.city})
        if(update.length == 0){
            return 0
        }
        else{
            const updatedData = await Registration.findOne({email : userData.email})
            return updatedData
        }
    }catch(e){
        console.log('Error while updating data',e)
    }
}


userRegistration.postData = async(postMessage)=>{
    try{
        const postmsg = new Post(postMessage)
        const savepost = postmsg.save()
    }catch(e){
        console.log('Error whie posting',e)
    }
}

userRegistration.getPostData = async()=>{
    try{
        const data = await Post.find({},{postmsg : 'This is virat page'})
        //console.log(data)
        return data
    }catch(e){
        console.log('Not get post data',e)
    }
}
module.exports = userRegistration