var TweetsStore = function (tweetConstructor) {
  this.tweets = {};
  this.tweetConstructor = tweetConstructor;
}

TweetsStore.prototype.create = function create(options) {
  var tweet = this.tweetConstructor.create(options);
  this.tweets[tweet.id()] = tweet;
  return tweet;
}

module.exports = TweetsStore;
