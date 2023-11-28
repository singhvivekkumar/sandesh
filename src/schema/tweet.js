const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
	content: {
		type: String,
		required: true
	},
	userEmail: {
		type: String
	}
})

module.exports = tweetSchema;