// console.log('hii... server')

import { io, Socket } from "socket.io-client";


const socket = io("http://localhost:3000")

socket.on('connect',()=>{
    console.log('client connected to server')

    socket.emit('message', 'Hello Max')

})


const msg_input = document.getElementById('msg-input')


form.addEventListener("submit", (event)=>{
    event.preventDefault(); 
    const message=msg_input.value;
    
    if (message==""){
        alert("Please type your message");
    }

    displayMessage(message)
    msg_input.value='';
})

function displayMessage(message){
    var div=document.createElement("div")
    div.textContent=message;
    document.getElementById("chat-box").append(div)
}

//module.exports = {displayMessage}




