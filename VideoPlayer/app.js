var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
   res.sendfile('index.html');
});

http.listen(8080);

/*
socket.io
*/
io.on('connection', function(socket){
  socket.broadcast.on('playClicked', function(data){
    io.emit('playClicked', data);
  });
  socket.on('pauseClicked', function(data){
    io.emit('pauseClicked', data);
  });
});
  
