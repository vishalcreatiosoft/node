const Email = require('../models/email-model');
const emails = {};



emails.sendEmail = async(emailData)=>{
    try{
        const email = new Email(emailData);
        const saveEmal = await email.save();

    }catch(e){
        console.log('Unable to send email',e);
    }
}

emails.findEmails = async(email)=> {
    try{
        // console.log(email);
        const userEmailData = Email.find({email : email})
        
        // if(userEmailData.length == 0){
        //     return 0;
        // }
        if(userEmailData.length != 0){
            return userEmailData;
        }

    }catch(e){
        console.log('unable to find emails',e);
    }
}




module.exports = emails;