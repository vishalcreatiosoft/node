
const express = require('express')
const path = require('path')
const routes = require('../routes/search-route')

const app = express()

//setting up port 
const port  = process.env.PORT || 3000

const view_path = path.join(__dirname,'../views')
const public_path = path.join(__dirname,'../public')

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(routes)
app.set('views', view_path)
app.set('view engine','hbs')
app.use(express.static(public_path))




app.listen(port,()=>{
    console.log('server started..')
})