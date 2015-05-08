var React = require('react');
var Hello = require("./components/hello_world");

function render () {
  var el = document.getElementById("mount");
  React.render(<Hello />, el);
}

setTimeout(function () { 
  render();
}, 0)

