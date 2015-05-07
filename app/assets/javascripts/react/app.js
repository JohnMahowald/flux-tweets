var React = require('react');
var Hello = require("./components/hello_world");

setTimeout(function () {
  var el = document.getElementById("mount");
  React.render(<Hello />, el);
}, 0)

