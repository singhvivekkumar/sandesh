// Schema is blue print of sturcture 
const mongoose = require('mongoose');

// mongoose is so advance 
// mongodb is super flexible means we don't need to worrid about structure of schema
const tweetSchema = new mongoose.Schema({
	content: {
		type: String,
		required: true
	},
	userEmail: {
		type: String
	}
}, { timestamps: true}); // create timestamps 

module.exports = tweetSchema;