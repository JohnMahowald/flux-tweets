Tweets.Collections.Tweets = Backbone.Collection.extend({
  url: "/api/tweets/",

  model: Tweets.Models.Tweet,
  
  getOrFetch: function (id) {
    var tweet = this.get(id);
    
    if (!tweet) {
      var tweet = new this.model({ id: id });
      tweet.fetch({
        success: function (tweet) {
          this.add(tweet);
          console.log("Addded: ", tweet);
        }.bind(this)
      });
    } else {
      tweet.fetch();
    }

    return tweet;
  }
})
