// Uso il modulo come variabile
/*
    var cat = require('./module');
    console.log(cat.legs);
    cat.sayHello();
*/
/*
var data = require('./module');
data.dataCorrente();
data.dayTills();
*/
//Server stampa date
/*
    var http = require('http');
    var data = require('./module');
    //Lettura di testo da linea di comando
    http.createServer(function (request, response)
    {   // Stampo pagina web in base a ciò che viene inserito nell'URL
        if(request.url === "/oggi")
        {
            response.writeHead(200);
            response.write('<h1>' + data.dataCorrente() +'</h1>\n');
            response.end();
        }
        else if(request.url === "/giorniMamma" )
        {
            response.writeHead(200);
            response.write('<h1>' + data.dayTills('m') +'</h1>\n');
            response.end();
        }
        else if(request.url === "/giorniNatale" )
        {
            response.writeHead(200);
            response.write('<h1>' + data.dayTills('n') +'</h1>\n');
            response.end();
        }
        else
        {
            response.writeHead(404);
            response.write('<h1> Error 404 file not found </h1>');
        response.end();
        }
    }).listen(3000);
    console.log('Server running at http://localhost:3000');
*/
var router = require('./module');
router();
