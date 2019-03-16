/*  
    This app illustrates  
    monggose-insert, update, delete, delete-with 'pre' hook, virtual property, 'set' method, validator
    UI intergration with routers, controller and model

    Before starting the app,install necessary packages, start mondodb server

*/

const express = require('express');
const app = express();
const task = require('./routes/task.route');
const mongoose = require('mongoose');


//set environment variable by set DEPLOY=dev or DEPLOY=prod
const env = process.env.DEPLOY || "dev";
const conf=require('./config/'+env+".json");

//adding express middleware to serve static pages - e.g style.css
app.use("/public", express.static(__dirname+'/public'));

//set view engine to be ejs engine
app.set('view engine', 'ejs');

// Create the database connection 
mongoose.connect(conf.dburl); 


app.use('/', task);
app.listen(conf.port);
console.log("app started on port ", conf.port);