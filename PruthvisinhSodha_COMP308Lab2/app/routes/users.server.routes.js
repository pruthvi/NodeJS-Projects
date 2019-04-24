// Load the 'users' controller
const users = require('../../app/controllers/users.server.controller');
const feedback = require('../../app/controllers/feedback.server.controller');

//const urlencodedparser = bodyparser.urlencoded({extended:false});

// Define the routes module' method
module.exports = function(app) {

    app.route('/display')
        .get(users.display);
        
    // Set up the 'users' base routes
	app.route('/register')//.post(users.create);
	   .post(users.create)
       .get(users.list);
       
       app.route('/thankyou')//.post(users.create);
	   .post(users.createFeedback)
       .get(users.fList);

       app.route('/login').post(users.checkUser);

	// Set up the 'users' parameterized routes 
	app.route('/feedback/:username')
	   .get(users.read)
       .put(users.update)
       
    // // Set up the 'userId' parameter middleware
    // app.param('userId', users.userByID);
    // //
    // //update from edit .ejs page
    // app.route('/edit').post(users.updateByUsername);
    // //display the document in edit_ejs page
    // app.route('/delete_user').get(users.showDeletePage);
    // //
    // app.route('/delete').delete(users.deleteByUserName);

    app.route('/list')
       .get(users.findall);
       
  //  router.get('/list', users.findall);


	
};