
import { io, Socket } from "socket.io-client";
const room_button=document.getElementById("room-button");
const msg_input=document.getElementById("msg-input");
const room_input=document.getElementById("room-input");

const form=document.querySelector("#form");

const socket =io("http://localhost:3000")

socket.on("connect",()=>{
    displayMessage(`Yo connected to server ${socket.id}`);
})

socket.on("receive-message",(message)=>{
    displayMessage(message);
})
// socket.emit("custom-event",3,"hello",{"aaa":123})
form.addEventListener("submit", function(e){
    e.preventDefault(); //prevents page from reloading
    const msg=msg_input.value;
    const room=room_input.value;
    if (msg==""){
        alert("Please type your message");
    }

    displayMessage(msg);
    socket.emit('send-message',msg,room);
    msg_input.value='';
})

room_button.addEventListener("click", function(){
    const room=room_input.value;
    socket.emit('join-room',room,(message)=>{
        displayMessage(message);
    });

})


function displayMessage(message){
    var div=document.createElement("div")
    div.textContent=message;
    document.getElementById("msg-container").append(div)
}

let c=0;
setInterval(()=>{
    socket.emit("ping",++c)
},1000);

document.addEventListener("keydown",e=>{
    if(e.target.matches("input")) return;
    if(e.key==="c") socket.connect();
    if(e.key==="d") socket.disconnect();
})