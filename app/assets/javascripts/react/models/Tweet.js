var invariant = require("../utils/invariant");
var _ = require("underscore");

var Tweet = function (options) {
  this.permitted = ["id", "content", "urlRoot"];
  this.data = this.validate(options);
}

Tweet.create = function (options) {
  return new Tweet(options);
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

Tweet.prototype.update = function (payload) {
}

//
// Private
//

Tweet.prototype._url = function () {
  return this.data.urlRoot + this.id();
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
