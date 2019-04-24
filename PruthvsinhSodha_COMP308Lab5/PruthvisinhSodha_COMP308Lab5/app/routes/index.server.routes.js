// Load the 'index' controller
const index = require('../controllers/index.server.controller');
const iris = require('../iris');

// Define the routes module' method
module.exports = function(app) {
	// Mount the 'index' controller's 'render' method
     app.get('/', index.showValue);
  

};