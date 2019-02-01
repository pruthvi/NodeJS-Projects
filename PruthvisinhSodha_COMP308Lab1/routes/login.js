const express = require('express');
const router = express.Router();
const bodyparser = require('body-parser');
const urlencodedparser = bodyparser.urlencoded({extended:false});


router.post('/feedback', urlencodedparser, function(req, res){
    res.render("feedback", {username:req.body.username});
 });

 router.get('/', urlencodedparser, function(req, res){
  res.render("index");

});

module.exports = router;