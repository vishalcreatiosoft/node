const express = require('express');
const mongoose = require('mongoose');
const route = require('../routes/route');




const port = process.env.PORT || 3000;
const app = express();

mongoose.connect('mongodb://localhost:27017/redis-mongo');
app.use(express.json())
app.use(express.urlencoded({extended : false}));
app.set('view engine','ejs');


app.use(route);

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});