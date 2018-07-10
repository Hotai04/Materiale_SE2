var express = require('express');
var getArea = require('./getArea.js')
var app = express();
app.use(express.json());
app.set('port', process.env.PORT || 3000);
app.get('/getArea', function(req, res)
{
    //var tmp = Object.keys(req.query);
    var sides = [];
    for( s in req.query)
    {
        sides.push(req.query[s])
    };
    var areaRect =
    {
        area: null
    };
    areaRect.area = getArea(sides);
    res.send(areaRect);
});

app.listen(app.get('port'),function()
{
    console.log("Listening on port " + app.get('port'));
});
