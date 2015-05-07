Tweets.Views.TweetsIndex = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.collection, "sync add remove", this.render);
  },

  className: "tweets-index",

  events: {
    "click .tweet": "renderTweet",
    "click .close": "destroyTweet",
    "click button": "renderForm",
  },

  template: JST['tweets/tweets_index'],

  className: "tweets-index",

  render: function () {
    this.el.innerHTML = this.template({
      tweets: this.collection.models
    });
    return this.el
  },
  
  renderTweet: function (e) {
    var tweet = e.target.dataset.tweetId;

    if (tweet) {
      Tweets.router.navigate("tweet/" + tweet, { trigger: true });
    }
  },

  destroyTweet: function (e) {
    var id = e.target.parentElement.dataset.tweetId;
    var model = this.collection.getOrFetch(id);
    model.destroy();
  },

  renderForm: function () {
    Tweets.router.navigate("tweets/new", { trigger: true });
  }
});
