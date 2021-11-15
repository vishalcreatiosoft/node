const express = require('express')
const path = require('path')
const route = require('../routes/route')
const app = express();
// const http = require('http').Server(express)
//const io = require('socket.io')(http)



const port = process.env.PORT || 8080;

const views_path = path.join(__dirname,'../views')
const public_path = path.join(__dirname, '../public')

app.use(express.static(public_path))
app.use(route)
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.set('views', views_path)
app.set('view engine','hbs')

// app.get('',(req, res)={
//     console.log(res.json)
// })

// http.listen(8000,()=>{
//     console.log('socket server is running on port 8000')
// })





app.listen(port, ()=>{
    console.log(`express server is running on port ${port}`)
})