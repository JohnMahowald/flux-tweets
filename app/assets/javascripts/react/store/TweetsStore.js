var TweetsStore = function (tweetConstructor) {
  this.tweets = {};
  this.tweetConstructor = tweetConstructor;
}

TweetsStore.prototype.create = function create(options) {
  var tweet = this.tweetConstructor.create(options);
  this.tweets[tweet.id()] = tweet;
  return tweet;
}

TweetsStore.prototype.updateAll = function () {
  for (id in this.tweets) {
    this.tweets[id].update();
  }
  return this.tweets;
}

module.exports = TweetsStore;
