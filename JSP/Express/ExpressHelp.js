//Installazione
sudo su 
npm init
npm install express --save
//expressjs.com
var express = require('express');	//richiedo express
var app = express();
//Quando avviene un get
app.get('/', function (req, res) {
  res.send('Hello World!');
});
//Quando avviene un post
app.post('/', function (req, res) {
  res.send('Got a POST request');
});
//Quando avviene una put
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});
//Quando avviene un delete
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});
//Imposto una porta dove poter ascoltare
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

// Require express and create an instance of it
var express = require('express');
var app = express();

// on the request to root (localhost:3000/)
app.get('/', function (req, res) {
    res.send('<b>My</b> first express http server');
});

// On localhost:3000/welcome
app.get('/welcome', function (req, res) {
    res.send('<b>Hello</b> welcome to my http server made with express');
});

// Change the 404 message modifing the middleware
app.use(function(req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});

// start the server in the port 3000 !
app.listen(3000, function () {
    console.log('Example app listening on port 3000.');
});

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('<b>My</b> first express http server');
});

// 1) Add a route that answers to all request types
app.route('/article')
.get(function(req, res) {
    res.send('Get the article');
})
.post(function(req, res) {
    res.send('Add an article');
})
.put(function(req, res) {
    res.send('Update the article');
});

// 2) Use a wildcard for a route
// answers to : theANYman, thebatman, thesuperman
app.get('/the*man', function(req, res) {
    res.send('the*man');
});

// 3) Use regular expressions in routes
// responds to : batmobile, batwing, batcave, batarang
app.get(/bat/, function(req, res) {
    res.send('/bat/');
});

app.use(function(req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000.');
});


var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('<b>My</b> first express http server');
});

// route with parameters
// matches to : /books/stephenking/category/horror
app.get('/books/:user/category/:categorySlug', function(req, res) {
    console.log(req.params);
    var username = req.params.user;
    var category = req.paramas.categorySlug;
    res.send(req.params);
});

app.use(function(req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000.');
});

Method	Description
res.download()	Prompt a file to be downloaded.
res.end()	End the response process.
res.json()	Send a JSON response.
res.jsonp()	Send a JSON response with JSONP support.
res.redirect()	Redirect a request.
res.render()	Render a view template.
res.send()	Send a response of various types.
res.sendFile()	Send a file as an octet stream.
res.sendStatus()	Set the response status code and send its string representation as the response body.

app.get('/', function (req, res) {
    // JSON response
    res.json({
        'myJson':'object'
    });

    // Generate file download
    res.download('/path-to-file.txt');

    // redirect to other url
    res.redirect('/foo/bar');
    res.redirect('http://example.com');

    // Other response types
    res.send(new Buffer('whoop'));
    res.send({ some: 'json' });
    res.send('<p>some html</p>');
    res.status(404).send('Sorry, we cannot find that!');
    res.status(500).send({ error: 'something blew up' });
});

var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('certificates/key.pem', 'utf8');
var certificate = fs.readFileSync('certificates/cert.pem', 'utf8');

var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();

// your express configuration here

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

// For http
httpServer.listen(8080);
// For https
httpsServer.listen(8443);

app.get('/', function (req, res) {
    res.header('Content-type', 'text/html');
    return res.end('<h1>Hello, Secure World!</h1>');
});