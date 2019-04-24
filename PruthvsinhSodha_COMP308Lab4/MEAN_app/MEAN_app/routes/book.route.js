const router =  require('express').Router();
const bookCntrl= require('../controllers/book.controller');

router.route('/')
.get(bookCntrl.find);    //Read


module.exports = router;