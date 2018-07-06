// Es 1 console.log("HELLO WORLD");

/* 2 Somma di valori presi dalla linea di comando
var tmp = process.argv; //dati linea di comando
var sum  = 0;
for(var i = 2; i < tmp.length; i++) //parto dalla posizione 2 perchè gli altri slot sono
{                                   //allocati da node ed il path del programma
    sum += Number(tmp[i]);  //converto stringa in numero
}
console.log(sum);
*/
/* 3 Lettura di righe in un file con funzione sincrona
var path = process.argv[2];
var fs = require('fs'); //gestore file
var content = (fs.readFileSync(path)).toString();
//console.log(content);
var lines = content.split("\n");
console.log(lines.length - 1);
*/
/* 4  Lettura righe di un file con funzione asincrona
var path = process.argv[2];
var fs = require('fs');
fs.readFile( path, function callback (err, data)
{
    if(err)
    {
        console.error(err);
    }
    var content =data.toString();
    var lines = content.split("\n");
    console.log(lines.length-1);
});
 */
/* 5 Lettura asincrona di file con una determinata estensione( no path module)
var dir = process.argv[2];
var ext= "." + process.argv[3];
var fs = require('fs');
fs.readdir(dir, function callback( err, list)
{
   if(err)
   {
       console.error(err);
   }
   for(var i= 0; i < list.length; i++)
   {
        if( list[i].endsWith(ext))
        {
            console.log(list[i]);
        }
   }
});

PATH MODULE VER
var fs = require('fs');
var path = require('path');
var folder = process.argv[2];
var ext = '.' + process.argv[3];
fs.readdir(folder, function (err, files)
{
   if (err)
   {
       return console.error(err);
   }
   files.forEach(function (file)
   {
        if (path.extname(file) === ext)
        {
            console.log(file);
        }
   });
});
*/
/* 6 Lettura asincrona di file con una determinata estensione( con modulo esterno)
var dir = process.argv[2];

var ext= process.argv[3];
var mymodule = require("./module.js");

mymodule( dir, ext, function (err, list)
{
    if( err)
    {
        return console.error(err);
    }
    for(var i= 0; i < list.length; i++)
    {
            console.log(list[i]);
    }
});
*/
/* 7 HTTP client che stampa i dati che riceve
var http = require('http');
var data = process.argv[2];
http.get(data, function callback (response)
{
    response.setEncoding("utf8");
    response.on("data", function (data)
    {
        console.log(data);
    });
    response.on("error", function (err)
    {
        return console.error(err);
    });
});
VERSIONE BELLA DEL SITO
var http = require('http')

http.get(process.argv[2], function (response) {
    response.setEncoding('utf8')
    response.on('data', console.log)
    response.on('error', console.error)
}).on('error', console.error)
*/
var htpp = require("http");
var




