var express = require('express');
var http = require('http');
var path    = require('path');
var bodyParser  = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req,res)
{
    res.sendFile(path.join(__dirname+'/calculator.html'));
});

app.post('/', function(req,res){
    var a1 = parseInt(req.params.n1);
    var a2 = parseInt(req.params.n2);
    var ris = a1+a2;
    res.writeHead(200);
    res.write(ris.toString);
    res.end();
});
http.createServer(app).listen(4597);
/*
app.use(function(req, res, next) {
    console.log(req.url);
    next();
  });
// create a route
app.get('/', function(req, res){
  res.writeHead(200);
  res.write('Hello Express!!!');
  res.end();
});//create another route, if i write "http://localhost:4567/yo" mi risponde 
app.get('/yo', function(req, res){
    res.writeHead(200);
    res.write('Sup bitch');
    res.end();
  });
// Create a server
http.createServer(app).listen(4567);*/