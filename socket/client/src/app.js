const express = require('express')
const path = require('path')
const route = require('../routes/route')
const io = require('socket.io-client')
const socket = io('http://localhost:3000')



const app = express()
const port = process.env.PORT || 8000

const views_path = path.join(__dirname,'../views')
const public_path = path.join(__dirname, '../public')
app.set('views', views_path)
app.set('view engine','hbs')
app.use(express.static(public_path))
app.use(route)

//socket code start

socket.on('connect',()=>{
    console.log(`connected with server ${socket.id}`)
})  
//socket.emit('custom-event',4,'vishal')
socket.emit('message','welcome to the chat application by creatiosoft')
socket.on('received-message',(message)=>{
    console.log(`${message} send by server`)
})
//socket code end


app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})