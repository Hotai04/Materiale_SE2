var fs = require('fs');
module.exports = function ( dir, ext, callback)
{
    fs.readdir(dir, function callback( err, list)
    {
        if(err)
        {
            return callback(err);
        }
        var tmp =
        list = list.filter( function (file)
        {
            if (file.endsWith("."+ext))
            {
                console.log(file);
            }
        });
        callback(null,list);
    })
};