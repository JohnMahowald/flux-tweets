Tweets.Routers.AppRouter = Backbone.Router.extend({
  initialize: function (tweets) {
    this.tweets = tweets;
    this.el = document.getElementById("mount");
  },

  routes: {
    "tweet/:id": "showTweet",
    "tweets/new": "newTweet", 
    "tweets": "index"
  },
  
  index: function () {
    this.tweets.fetch();

    var index = new Tweets.Views.TweetsIndex({
      collection: this.tweets
    });
    this._swapView(index);
  },

  newTweet: function() {
    var view = new Tweets.Views.NewTweet({
      collection: this.tweets
    });

    this._swapView(view);
  },

  showTweet: function (id) {
    console.log("showing tweet");
    var tweet = this.tweets.getOrFetch(id)

    var view = new Tweets.Views.ShowTweet({
      model: tweet
    })

    this._swapView(view);
  },

  _swapView: function (view) {
    this.el.innerHTML = "";
    this.el.appendChild(view.render());
  }
})
