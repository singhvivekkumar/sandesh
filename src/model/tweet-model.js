const mongoose = require('mongoose');

const tweetSchema = require('../schema/tweet');

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;