Tweets.Routers.AppRouter = Backbone.Router.extend({
  initialize: function () {
    this.el = document.getElementById("mount");
  },

  routes: {
    "tweets": "index"
  },
  
  index: function () {
    var index = new Tweets.Views.TweetsIndex()
    this._swapView(index)
  },

  _swapView: function (view) {
    this.el.innerHTML = "";
    this.el.appendChild(view.render());
  }
})
