/*  
    This app has horizontal folder structure and uses express routes
    
    0. npm init
    1. install express and body-parser, ejs-   npm install express body-parser ejs --save
    2. set env variable if desired- in DOS shell 'SET DEPLOY=prod', in windows powershell '$env:DEPLOY = "prod"
    2. run app-    nodemon app.js
    3. test (default)- http://localhost:3000/users
      http://localhost:3000/course/comp308
      Note: if you set prod env then port is 80
*/

const express = require('express');
const app = express();

const course = require('./routes/course');
const user = require('./routes/user');

//adding express middleware to serve static pages - e.g style.css
app.use("/public", express.static(__dirname+'/public'));

//set view engine to be ejs engine
app.set('view engine', 'ejs');

//set environment variable by set DEPLOY=dev or DEPLOY=prod
const env = process.env.DEPLOY || "dev";

//load configuration json data
const conf=require('./config/'+env+".json");

app.use('/course', course);
app.use('/users', user);

app.listen(conf.port);
console.log("app started on port ", conf.port);