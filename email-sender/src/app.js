const express = require('express');
const path = require('path');
const route = require('../routes/route');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

const views_path = path.join(__dirname,'../views');
const public_path = path.join(__dirname,'../public');
mongoose.connect('mongodb://localhost:27017/email-sender');

app.set('view engine','hbs');
app.set('views', views_path);
app.use(express.static(public_path));
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(route);




app.listen(port, ()=>{
    console.log('server running on port 3000');
})