const io=require("socket.io")(3000,{
    cors:{
        origin:["http://localhost:8080"]
    }
})


io.on("connection",socket =>{
    console.log(socket.id);

    // socket.on("custom-event",(num,string,obj)=>{
    //     console.log(num,string,obj);
    // })


    socket.on('send-message',(message,room)=>{
        console.log(message);
        console.log(room)
        if(room==""){
            socket.broadcast.emit("receive-message",message);
        }else{
            socket.to(room).emit("receive-message",message);
        }
        // io.emit('receive-message',message)
        
    })


    socket.on('join-room',(room,cb)=>{
        socket.join(room);
        cb(`Joined ${room}`);
    })

    socket.on('ping',(num)=>{
        console.log(num)
    })
})