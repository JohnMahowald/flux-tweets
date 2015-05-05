Tweets.Views.ShowTweet = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  events: {
    "click button": "returnToIndex"
  },

  template: JST["tweets/show"],

  render: function () {
    this.el.innerHTML = this.template({
      tweet: this.model
    });
    return this.el;
  },

  returnToIndex: function () {
    Tweets.router.navigate("tweets", { trigger: true })
  }
});
