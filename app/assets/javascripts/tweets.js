window.Tweets = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    router = new Tweets.Routers.AppRouter();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Tweets.initialize();
});
