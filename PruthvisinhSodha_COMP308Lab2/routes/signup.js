const express = require('express');
const router = express.Router();
const bodyparser = require('body-parser');
const urlencodedparser = bodyparser.urlencoded({extended:false});

router.post('/', urlencodedparser, function(req, res){
    res.render("signup" );
  });
  
module.exports = router;