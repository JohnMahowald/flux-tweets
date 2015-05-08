var invariant = require("invariant");
var _ = require("underscore");
var __DEV__ = "production" !== process.env.NODE_ENV;

var Tweet = function (options) {
  this.permitted = ["id", "content"];
  this.data = this.validate(options);
}

Tweet.prototype.id = function (id) {
  return this.data.id;
}

Tweet.prototype.content = function (content) {
  return this.data.content;
}

Tweet.prototype.validate = function (options) {
  var keys = Object.keys(options);
  var tweet = this;

  this._validateOnlyPermittedKeys(keys);
  this._validatesRequiredKeys(keys);

  return options
}

Tweet.prototype._validateOnlyPermittedKeys = function (keys) {
  var tweet = this;

  for (var i = 0; i < keys.length; i ++) {
    invariant(
        _.contains(tweet.permitted, keys[i]),
        "invalid argument '%s' given", 
        keys[i])
  }
}

Tweet.prototype._validatesRequiredKeys = function (keys) {
  var tweet = this;

  for (var j = 0; j < this.permitted.length; j ++) {
    invariant(
        _.contains(keys, tweet.permitted[j]),
        "missing key '%s'",
        tweet.permitted[j]);
  }
}

module.exports = Tweet;
