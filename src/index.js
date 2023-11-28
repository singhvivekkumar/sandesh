const express = require('express');
const connectDatebase = require('./config/database');
const Tweet = require('./model/tweet-model');

const app = express();

app.listen(3000, async ()=> {
	console.log("server running on :",3000);
	await connectDatebase();
	console.log("conneted to mongodb"); 
	const tweet = await Tweet.create({
		content: "first tweet",
		userEmail: "singhvivek@gamil.com"
	})
	console.log(tweet);
})
