const mongoose = require('mongoose');

const connectDatebase = async () => {
	try {
		await mongoose.connect('mongodb://0.0.0.0/twitter_dev');
	} catch (error) {
		console.log('error while connecting to database');
		throw error;
	}
}

module.exports = connectDatebase;