const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const route = require('../routes/route')

const app = express()
const port  = process.env.PORT || 3000

const views_path = path.join(__dirname,'../views')
const public_path = path.join(__dirname, '../public')

app.set('views',views_path)
app.set('view engine','hbs')
app.use(express.static(public_path))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(route)

mongoose.connect('mongodb://localhost:27017/user-registration')


app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})