/*
    var Cat =
    {
        legs: 4,
        head: 2,
        ears: 2,
        sayHello: function()
            {
                console.log('meow');
            }
    };
module.exports = Cat;
*/
// Modulo per stampare date
/*
    var Data =
    {
        dataCorrente: function()
        {
            var curDate = new Date();
            console.log("Ora corrente: "+ curDate.getHours()+":"+ curDate.getMinutes()+":"+ curDate.getSeconds());
        },
        dayTills: function ( c)
        {
            var output;
            var curDate = new Date();
            var motherDate = new Date(2018,5,13);
            var christmasDate = new Date(2018,12,25);
            if(c == 'm')
            {
                output = "Giorni mancanti per la festa della mamma "+ Math.round((motherDate - curDate)/(1000*3600*24));
                console.log(output);
                return  output
            }
            if( c == 'n')
            {
                output = "Giorni mancanti per la Natale "+ Math.round((christmasDate - curDate)/(1000*3600*24));
                console.log(output);
                return output
            }

        }
    };
    module.exports = Data;
*/
// Modulo router

    var router = function ()
    {
        var http = require('http');
        var fs = require('fs');
        http.createServer(function (request, response) {
            var path = __dirname + "/views" + request.url + ".html";   //Percorso richiesto con l'estensione html
            console.log(path);
            fs.readFile(path, function (err, data)
            {
                if (err) //Se non esiste stampo errore
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
    };
    module.exports = router;