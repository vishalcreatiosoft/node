const express = require('express')
const request = require('request')
const path = require('path')
const { response } = require('express')
const fetch = require('cross-fetch')
const { resolve, parse } = require('path')
const { rejects } = require('assert')

//how to set the port
const port = process.env.PORT || 3000
const app = express()

//how to setup the path of directory
const viewsDirectoryPath = path.join(__dirname, '../templates/views') 
const publicDirectoryPath = path.join(__dirname, '../public')


//hwo to use/set path 
app.set('views',viewsDirectoryPath)
app.set('view engine','hbs')
app.use(express.static(publicDirectoryPath))

//code below is to set url result to show
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//simple route
app.get('',(req,res)=>{
    res.render('index')
})


//async function to fetch the data and return to post route
const fetchData = async(country, category)=>{
    let dataArray =[]
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&sortBy=popularity&apiKey=65d1657a27174dbabb6ad8d40bd8fe3f&limit=1`  

    const data = await fetch(url).then((response)=> response.json())
    
    for(let i=0;i<20;i++){
        dataArray.push({
            source : data.articles[i].source.name,
            title : data.articles[i].title,
            url : data.articles[i].url,
            content : data.articles[i].description
        })
    }    
    //console.log(dataArray)
    return dataArray
    
}

app.post('/home',async(req, res)=>{
    
    const country = req.body.countryName
    const category = req.body.newsCategory
    const getData = await fetchData(country, category)
    //console.log(result)

    resultData = JSON.stringify(getData) 
    res.render('home',{newsInfo : resultData })

    
})




app.listen(port,()=>{
    console.log(`server is running on ${port} `)
})

