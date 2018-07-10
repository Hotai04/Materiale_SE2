var express = require('express');
var app = express();
app.use(express.json());
app.set('port', process.env.PORT || 3000);

var assignments = [
    {
        taskID:'abc', 
        assignmentID:'123',
        workerID:'pino',
        assignmentResult:'ok'
    },
    {
        taskID:'bc', 
        assignmentID:'23',
        workerID:'ino',
        assignmentResult:'ok'
    }
];

function searchAssignmentsByWID(wID)
{
    var WIDA = [];

    assignments.find(function(a)
    {
        if(a.workerID == wID){
            WIDA.push(a);
        }       
    });
    return WIDA;
}

function searchAssignmentsByAID(aID)
{
    assignments.find(function(a)
    {
        if(a.assignmentID == aID){
            return a;
        }       
    });
    return null;
}


app.get('/', function(req, res)
{
    res.send('hello');
});

app.get('/assignments', function(req, res)
{
    res.send(assignments);
});

app.get('/assignments/:workerID', function(req, res)
{
    var WIDA = searchAssignmentsByWID(req.params.workerID);
    if (!WIDA){
        res.send('User not found');
    }else{
        res.send(WIDA);
    }
});

app.post('/assignments', function(req,res)
{  
    var assignment = {
        taskID:req.body.taskID, 
        assignmentID:req.body.assignmentID,
        workerID:req.body.workerID,
        assignmentResult:req.body.assignmentResult
    };
    assignments.push(assignment);
    res.send(assignment);

})

app.put('/assignments/:assignmentID', function(req, res)
{
    var assignment = searchAssignments(req.params.assignmentID);
    if (assignment)
    {
        assignment.taskID=req.body.taskID;
        assignment.assignmentID=req.body.assignmentID;
        assignment.workerID=req.body.workerID;
        assignment.assignmentResult=req.body.assignmentResult;
        res.send(assignment);
    }else{
        res.send('Assignment not found');
    }
});

app.delete('/assignments/:assignmentID', function(req, res)
{
    var assignment = searchAssignments(req.params.assignmentID);
    if (assignment){
        assignments.pop(assignment);
    }else{
        res.send('Assignment not found');
    }
});

app.listen(app.get('port'),function()
{
    console.log("Listening on port " + app.get('port'));
});