const express = require('express');
const router = express.Router();
const bodyparser = require('body-parser');
const urlencodedparser = bodyparser.urlencoded({extended:false});

const users={} ;

router.post('/add', urlencodedparser, function(req, res){
  //add user to the object
  users[req.body.firstname]=req.body.lastname;

   //show the user and add page
  res.render("add_user", {USERS_LIST:users});
 });

 //return the blank add page
 router.get('/', urlencodedparser, function(req, res){
    res.render("add_user", {USERS_LIST:users});
 });
module.exports = router;