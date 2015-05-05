Tweets.Views.TweetsIndex = Backbone.View.extend({
  template: JST['tweets/tweets_index'],

  className: "tweets-index",

  render: function () {
    this.el.innerHTML = this.template();
    return this.el
  }
});
