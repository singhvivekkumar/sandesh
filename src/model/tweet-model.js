// Models are actual instance or object which connet to database and fetch and create object
const mongoose = require('mongoose');

const tweetSchema = require('../schema/tweet');

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;