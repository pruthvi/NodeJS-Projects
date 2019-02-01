/*  
    test http://localhost:3000
      Note: if you set prod env then port is 80
*/

const express = require('express');
const app = express();

const login = require('./routes/login');
const feedback = require('./routes/feedback');
const thankyou = require('./routes/thankyou');

//adding express middleware to serve static pages - e.g style.css
app.use("/public", express.static(__dirname+'/public'));

//set view engine to be ejs engine
app.set('view engine', 'ejs');

//set environment variable by set DEPLOY=dev or DEPLOY=prod
const env = process.env.DEPLOY || "dev";

//load configuration json data
const conf=require('./config/'+env+".json");

app.use('/', login);
app.use('/feedback', feedback);
app.use('/thankyou', thankyou);

app.listen(conf.port);
console.log("app started on port ", conf.port);