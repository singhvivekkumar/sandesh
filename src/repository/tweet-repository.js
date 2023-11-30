const Tweet = require('../model/tweet-model');

class TweetRepository {

	async create(data) {
		try {
			const tweet = await Tweet.create(data);
			return tweet;
		} catch (error) {
			console.log(error);
		}
	}
	
	async get(tweetId) {
		try {
			const tweet = await Tweet.findById(tweetId);
			return tweet;
		} catch (error) {
			console.log(error);
		}
	}

	async update(tweetId, data) {
		try {
			const tweet = await Tweet.findByIdAndUpdate(tweetId, data);
			return tweet;
		} catch (error) {
			console.log(error);
		}
	}

	async destory(tweetId) {
		try {
			const tweet = await Tweet.findByIdAndRemove(tweetId);
			return tweet;
		} catch (error) {
			console.log(error);
		}
	}
}
module.exports = TweetRepository;