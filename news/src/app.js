const express = require('express')
const request = require('request')
const path = require('path')


const port = process.env.PORT || 3000
const app = express()

//how to setup the path of directory
const viewsDirectoryPath = path.join(__dirname, '../templates/views') 
const publicDirectoryPath = path.join(__dirname, '../public')


//hwo to use/set path 
app.set('views',viewsDirectoryPath)
app.set('view engine','hbs')
app.use(express.static(publicDirectoryPath))

app.use(express.json());
app.use(express.urlencoded({extended:false}))


app.get('',(req,res)=>{
    res.render('index')
})

app.post('/home',(req, res)=>{
    let dataArray = []
    const country = req.body.countryName
    const category = req.body.newsCategory

    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&sortBy=popularity&apiKey=65d1657a27174dbabb6ad8d40bd8fe3f&limit=1`

    request({url: url},(error,response)=>{
        const data = JSON.parse(response.body)

        for(let i=0;i<20;i++){
            dataArray.push({
                source : data.articles[i].source.name,
                title : data.articles[i].title,
                url : data.articles[i].url,
                content : data.articles[i].description
            })
        }  
        
        resultData = JSON.stringify(dataArray)
        
        res.render('home',{newsInfo : resultData })
    })
    

})





app.listen(port,()=>{
    console.log(`server is running on ${port} `)
})