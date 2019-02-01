var express = require('express');
var router = express.Router();


//key value array
var courses = { comp308:"a3-11", comp228:"a3-15"};


router.get('/:coursename', function(req, res){
  res.render("courses",{name:req.params.coursename, room:courses[req.params.coursename]});
 });


 //add app.post to add coursename, room to courses array

module.exports = router;