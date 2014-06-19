var express  = require('express');
var app      = express();
var server   = require('http').Server(app);

server.listen(process.env.PORT || 5000, function() {
  console.log("Listening at localhost:5000...");
});

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/public/index.html');
});

app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next){
  res.send(404, '404: Content not found.');
});
