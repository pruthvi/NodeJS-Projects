const express = require('express');
const router = express.Router();
const bodyparser = require('body-parser');
const urlencodedparser = bodyparser.urlencoded({extended:false});

router.post('/thankyou', urlencodedparser, function(req, res){
    res.render("thankyou",{email:req.body.email});
 });


router.post('username', function(req, res){
  res.render("feedback",{username:req.params.username});
 });



module.exports = router;