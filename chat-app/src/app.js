const express = require('express')
const path = require('path')
const http = require('http')
const routes = require('../routes/search-route')
const socket = require('socket.io')
const Filter = require('bad-words')



const app = express()
const server = http.createServer(app)
const io = socket(server)

//setting up port 
const port  = process.env.PORT || 3000

const view_path = path.join(__dirname,'../views')
const public_path = path.join(__dirname,'../public')

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.set('views', view_path)
app.set('view engine','hbs')
app.use(express.static(public_path))
app.use(routes)
 
let count  = 0
io.on('connection',(socket) => {
    console.log('New WebSocket connection')

    // socket.emit('countUpdated', count)

    // socket.on('increament',()=>{
    //     count++
    //     //socket.emit('countUpdated',count)   //it emits only for single connection
    //     io.emit('countUpdated', count)
    // })

    //to emit message to single client
    socket.emit('message','Welcome!')
    //to emit message all client except current one
    socket.broadcast.emit('message','A new user has joined')

    //to emit message to all users
    socket.on('sendMessage',(message,callback)=>{

        const filter = new Filter()
        if(filter.isProfane(message)){
            return callback('Profanity is not allowed!')
        }

        io.emit('message', message)
        callback()
    })

    socket.on('sendLocation',(coords, callback)=>{
        io.emit('message',`https://www.google.com/maps?q=${coords.latitude},${coords.longitude}`)
        callback()
    })

    socket.on('disconnect',() => {
        io.emit('message','A user has left')
    })



})

server.listen(port,()=>{
    console.log('server started..')
})