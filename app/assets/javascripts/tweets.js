window.Tweets = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    this.tweets = new Tweets.Collections.Tweets([]);
    this.router = new Tweets.Routers.AppRouter(this.tweets);
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Tweets.initialize();
});
