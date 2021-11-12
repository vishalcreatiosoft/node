const io = require('socket.io')(3000)

io.on('connection', socket => {
    console.log(socket.id)

    // socket.on('custom-event',(num,string)=>{
    //     console.log(num,string)
    // })

    socket.on('message',(message)=>{
        console.log(message)

        io.emit('received-message',message)
    })
    

})