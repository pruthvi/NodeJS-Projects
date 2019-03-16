const express = require('express');
const router = express.Router();
const bodyparser = require('body-parser');
const urlencodedparser = bodyparser.urlencoded({extended:false});
const task = require('../controllers/task.controller');

//chaining 
router.route('/add').post(urlencodedparser, task.insert)
.get(task.taskadd);

router.route('/').get(task.home);

router.route('/update/:taskId')
.post(urlencodedparser, task.updateT);
//router.param('taskId', task.updateT);


// router.route('/update/:taskId')
// .get(task.taskadd)
// .put(task.updateT)
// router.param('taskId', task.updateT);

/*
	// Set up the 'users' parameterized routes 
	app.route('/users/:userId')
	   .get(users.read)
	   .put(users.update)
    // Set up the 'userId' parameter middleware
    app.param('userId', users.userByID);
*/




router.get('/list', task.findall);

module.exports = router;
