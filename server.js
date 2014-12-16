var express = require('express')
var app = express()
var path = require('path');
 var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static(__dirname + '/app'));


var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})