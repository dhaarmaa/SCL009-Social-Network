var express = require('express');
var app = express();

app.use(express.static(__dirname + '/src'));

app.get('/',function(request, response){
  response.sendFile(__dirname + '/index.html');
});

app.listen(8800, function(){
  console.log('Server Express Ready!');
});