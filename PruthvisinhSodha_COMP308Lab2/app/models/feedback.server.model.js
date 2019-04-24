// Load the Mongoose module and Schema object
const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const FeedbackSchema = new Schema({
	fName: String,
	lName: String,
	email: {
		type: String,
	},
	season: {
		type: String,
	},
	game: {
		type: String,
	},
	feedback: {
		type: String,
	}
});


mongoose.model('feedback', FeedbackSchema);