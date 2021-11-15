// // const express = require('express')
// // const path = require('path')
// // const route = require('../routes/route')
// // const app = express();
// // const http = require('http').Server(express)
// const io = require('socket.io')(3000)


// const port = process.env.PORT || 3000;

// const views_path = path.join(__dirname,'../views')
// const public_path = path.join(__dirname, '../public')

// app.use(express.static(public_path))
// app.use(route)
// app.use(express.json());
// app.use(express.urlencoded({extended:false}))

// app.set('views', views_path)
// app.set('view engine','hbs')


// // http.listen(8000,()=>{
// //     console.log('socket server is running on port 8000')
// // })


// // io.on('connection', socket => {
// //     //console.log(socket.id)
    
// //     socket.on('message',(message)=>{
// //         console.log(message)
// //     })
    
// // })



// // app.listen(port, ()=>{
// //     console.log(`express server is running on port ${port}`)
// // })

const io=require("socket.io")(3000,{
    cors:{
        origin:["http://localhost:8080"]
    }
});


io.on('connection', socket => {
    console.log(socket.id)
    
    socket.on('message',(message)=>{
        console.log(message)
    })
    
})
