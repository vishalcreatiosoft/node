const exp = require('constants')
const { hasSubscribers } = require('diagnostics_channel')
const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()

//define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsDirectoryPath = path.join(__dirname,'../templates/views')
const partialsDirectoryPath = path.join(__dirname, '../templates/partials')

//setup handlerbars engine and views location
app.set('view engine', 'hbs')
app.set('views',viewsDirectoryPath)
hbs.registerPartials(partialsDirectoryPath)

//setup static directory to server
app.use(express.static(publicDirectoryPath))



//routes
//we can pass the HTML and JSON
app.get('',(req, res)=>{
    res.render('index',{
        title : 'Weather Application',
        name : 'Allen Bee'
    })
})

app.get('/about',(req, res)=>{
    res.render('about',{
        title : 'About us',
        name : 'Allen Bee'
    })
})

app.get('/help',(req, res)=>{
    res.render('help',{
        title : 'Help',
        name : 'Allen Bee'
    })
})

app.get('/weather',(req, res)=>{

    if(!req.query.address){
        res.send({
            error : 'please provide address'
        })
    }
    console.log(req.query.address)

    res.send([{
        forecast : 'Its raining',
        location : 'Lucknow'
    },{
        forecast : 'Sunny',
        locationo : 'Delhi'
    }]
    )
})

app.get('/products',(req,res)=>{

    if(!req.query.search){
        res.send({
            error : 'You must provide search term'
        })
    }
    console.log(req.query.search)
    res.send({
        products : []
    })
})

// app.get('*',(req, res)=>{
//     res.render('error')
// })

app.listen(3000, ()=>{
    console.log('server is running on port 3000')
})