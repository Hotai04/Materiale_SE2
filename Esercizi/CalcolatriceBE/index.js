var http = require('http');
var url = require('url');

http.createServer(function (req, res) 
{
  var q = url.parse(req.url, true);
  var op = q.pathname;
  var ris=0;
  var v1 = parseInt(q.query.x);
  var v2 = parseInt(q.query.y);
  if(op == '/sum') //ES http://localhost:3000/sum?x=2&y=3
  {
    ris = v1+v2;  
    
  }
  else if(op == '/mul') //ES http://localhost:3000/mul?x=2&y=3
  {
    ris = v1*v2;
  }
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(ris.toString());
  res.end();
}).listen(3000);
console.log('Server running at http://localhost:3000');
