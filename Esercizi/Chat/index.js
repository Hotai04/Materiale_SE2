var express = require('express');
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('port', process.env.PORT || 3000);

/*var users = {
    "username": "aldo",
    "password": "a"
};
var user2 = {
    "username": "pippo",
    "password": "b"
};*/

app.get('/user/:value', function(req,res)
{

});
app.post('/user/value', function(req,res)
{

});
app.put('/user/value', function(req,res)
{

});

app.get('/rooms', function(req,res)
{

});
app.post('/room', function(req,res)
{

});
app.put('/room', function(req,res)
{

});

app.get('/msg', function(req,res)
{

});
app.pos('/msg', function(req,res)
{

});

app.listen(app.get('port'),function()
{
    console.log("Listening on port " + app.get('port'));
});