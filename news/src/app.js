const { response } = require('express')
const express = require('express')
const request = require('request')
const path = require('path')


const port = process.env.PORT || 3000
const app = express()

//how to setup the path of directory
const viewsDirectoryPath = (__dirname, '../templates/views') 


//hwo to use/set path 
app.set('views',viewsDirectoryPath)
app.set('view engine','hbs')

app.get('',(req, res)=>{
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=sports&sortBy=popularity&apiKey=65d1657a27174dbabb6ad8d40bd8fe3f&limit=1`

    // request({url: url},(error,response)=>{
    //     const data = JSON.parse(response.body)
    //     //console.log(data)
    //     res.send(data)
    // })

    res.send('Home page')

    
})

app.listen(port,()=>{
    console.log(`server is running on ${port} `)
})