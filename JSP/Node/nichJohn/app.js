//console.log("Hello World")
//Giorni e secondi per Natale
/*
    var d  = new Date();
    var chr = new Date(2018,12,25);
    var diff = Math.round(( chr - d) /1000);
    console.log("Secondi per Natale " + diff + " Giorni per Natale " + Math.round((diff/ (60 * 60 * 24))));
*/
//Server
/*
    var http = require('http');
    var text = process.argv[2]; //Lettura di testo da linea di comando
    http.createServer(function (request, response)
        {   // Stampo pagina web in base a ciò che viene inserito nell'URL
            if(request.url === "/nacktschnecke")
            {
                response.writeHead(200);
                response.write('<h1>' + request.url +'</h1>\n');
                response.end();
            }
            else if(request.url === "/about" )
            {
                response.writeHead(200);
                response.write('<h1>' + request.url +'</h1>\n');
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
//Lettura di file
/*var fs = require ('fs');
var file = process.argv[2]; //File inserito da linea di comando
var path = __dirname + "/"+file;    //Path del file composto dalla directory attuale + file
console.log(__dirname); // Path della directory attuale
fs.readFile(path, function( err, data)
{
   if(err)
   {
       return console.error(err);
   }
   console.log(data.toString());    //Stampa contenuto file
});
*/
// Server per lettura file

    var http = require('http');
    var fs = require('fs');
    http.createServer(function (request, response)
    {
        var path = __dirname +"/views"+ request.url +".html";   //Percorso richiesto con l'estensione html
        console.log(path);
        fs.readFile(path, function( err, data)
        {
            if(err) //Se non esiste stampo errore
            {
                response.writeHead(404);
                response.write('<h1> Error 404 file not found </h1>');
                response.end();
            }
                response.writeHead(200);
                response.end(data); //Se esiste stampo il suo contenuto
        });
    }).listen(3000);
    console.log('Server running at http://localhost:3000');

