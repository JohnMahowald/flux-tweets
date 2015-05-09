var Tweet = require("../models/Tweet");

var TweetsStore = function () {
  this.tweets = {};
}

TweetsStore.prototype.create(options) {
  var tweet = new Tweet(options);
  this.tweets[tweet.id()] = tweet;
  return tweet;
}

module.exports = TweetsStore;
