var express = require('express')
var app = express()
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
//var mydb='mongodb+srv://yashu:GEapBtPVtFN7K4YV@cluster0.b0tlw.mongodb.net/donors?retryWrites=true&w=majority'; 
var mydb ='mongodb+srv://yashu:yashu@cluster0.b0tlw.mongodb.net/donors?retryWrites=true&w=majority';

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb+srv://yashu:social@cluster0.b0tlw.mongodb.net/donors?retryWrites=true&w=majority";

var route= require('./routes/routes.js')
var cors=require('cors');
mongoose.connect(mydb, { useNewUrlParser: true }); //connecting to the database using mongoose

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use(cors());

app.use('/api',route);//api routings

app.listen(3000,()=>{
    console.log("listening on 3000")

})