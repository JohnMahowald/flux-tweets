var Tweet = require("../models/Tweet");

var TweetsStore = function () {
  this.tweets = {};
}

TweetsStore.prototype.create(options) {
  this.tweets[options.id] = options.content;
  return options
}

module.exports = TweetsStore;
