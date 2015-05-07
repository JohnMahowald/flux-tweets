Tweets.Views.NewTweet = Backbone.View.extend({
  template: JST['tweets/new'],

  events: {
    "click .submit": "saveTweet"
  },

  className: "new-tweet",
  
  render: function () {
    this.el.innerHTML = this.template();
    return this.el
  },
  
  saveTweet: function (e) {
    e.preventDefault();

    var data = $(e.target.parentElement).serializeJSON();
    data.tweet.user_id = this.getUserId();

    this.collection.create(data, { 
      success: function (tweet) {
        this.collection.add(tweet);
        this.redirect();
      }.bind(this)
    })
  },

  getUserId: function () {
    var re = /\/(\d+)\/*$/;
    var data = re.exec(window.location.pathname);
    return parseInt(data[1]);
  },

  redirect: function () {
    Tweets.router.navigate("", { trigger: true });
  }
})
