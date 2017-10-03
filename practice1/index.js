var express = require('express');
var app = express();

app.listen(3000, function() {
  console.log("hi practice1");
});

app.get('/', function(req, res) {
  res.send('hiiiiiii! (1)');
});
