var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var HttpRequest = function (options) {
  this.url = options.url;
  this.payload = options.payload;
  this.async = options.async;
  this.callback = options.callback;
}

HttpRequest.create = function (options) {
  return new HttpRequest(options);
}

HttpRequest.prototype.post = function () {
  var req = new XMLHttpRequest();
  req.onreadystatechange = this._genReadyStateChange(req);
  req.open("POST", this.url, this.async);
  req.setRequestHeader("Content-Type", "application/json");
  req.send(JSON.stringify(this.async));
}

HttpRequest.prototype.send = function () {
}

HttpRequest.prototype.success = function (res) {
  if (res.status == 200) {
    this.callback(res.data);
  }
}

HttpRequest.prototype._genReadyStateChange = function (req) {
  return function ()  {
    if (req.readystate === 4) {
      this.success(this.payload)
    }
  }.bind(this);
};

module.exports = HttpRequest;
