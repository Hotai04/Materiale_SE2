var express = require('express');
var app = express();
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.set('port', process.env.PORT || 3000);


var users = 
[
    {
        username: "aldo",
        password: "a"
    },
    {
        username: "pippo",
        password: "b"
    }
];

var rooms = 
[
    {
        roomID: 1,
        roomName: "a"
    },
    {
        roomID: 2,
        roomName: "b"
    }
];

var msgs = 
[
    {
        room: 1,
        roomName: "a"
    },
    {
        roomID: 2,
        roomName: "b"
    }
];

function searchUser(user)
{
    users.find(function(u)
    {
        if(u.username == user)
        {
            return u;
        }
        return null;
    });
}

function searchRoom(room)
{
    return rooms.find(function(r)
    {
        if(r.roomID == room)
        {
            return room;
        }
        return null;
    });
}

app.get('/', function(req, res)
{
    res.send("Welcome");
})

app.get('/users', function(req, res)
{
    res.send(users);
})

app.get('/users/:value', function(req,res)
{
    var user = searchUser(req.params.value); 
    if(!user)
    {
        res.send("User not found");
    }
    else
    {
        res.send(user);
    }
});
app.post('/users', function(req,res)
{
    var user = searchUser(req.body.username);
    if(!user)
    {
        var newUser = 
        {
            username: req.body.username,
            password: req.body.password       
        };
        users.push(newUser);
        res.send(newUser);
    }
    else
    {
        res.send("Utente già presente");
    }
});
app.put('/users/:value', function(req,res)
{
    var user = searchUser(req.params.value);
    if(!user)
    {
        res.send("User not found");
    }
    else
    {
        user.username = req.body.username;
        res.send(user);
    }
});

app.get('/rooms', function(req,res)
{
    res.send(rooms);
});
app.post('/rooms', function(req,res)
{
    var room = searchRoom(req.body.roomID);
    if(!room)
    {
        var newRoom = 
        {
            roomID: req.body.roomID,
            roomName: req.body.roomName       
        };
        rooms.push(newRoom);
        res.send(newRoom);
    }
    else
    {
        res.send("Stanza già presente");
    }
});
app.put('/rooms/:value', function(req,res)
{
    var room = searchRoom(req.params.value);
    if(!room)
    {
        res.send("Room not found");
    }
    else
    {
        room.roomName = req.body.roomName;
        res.send(room);
    }
});

app.get('/msg', function(req,res)
{

});
app.post('/msg', function(req,res)
{

});

app.listen(app.get('port'),function()
{
    console.log("Listening on port " + app.get('port'));
});