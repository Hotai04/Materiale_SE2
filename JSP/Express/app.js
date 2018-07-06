var express = require('express');
var http = require('http');
var path = require('path');
var app = express();
// create a route
console.log(__dirname);
//Apre file nella cartella public
app.use('/public', express.static(__dirname+"/public"));
app.use(function(req, res, next) {
    console.log(req.url);
    next();
});
var data = "/"+process.argv[2];
app.get('/', function(req, res){
    res.writeHead(200);
    res.write('Hello Express!!!');
    res.end();
});
app.get('/yo', function(req, res){
    res.writeHead(200);
    res.write('Yo!!!');
    res.end();
});
//Stampa data
app.get(data, function(req, res){
    res.writeHead(200);
    res.write(data);
    res.end();
});
// Create a server
http.createServer(app).listen(4567);
console.log('Server running at http://localhost:4567');