function getAttributes()
{
    var URL = document.getElementById('w3r');
    console.log(URL.href + " " +  URL.hreflang + " " + URL.rel + " " + URL.target + " " + URL.type + " ");
}

function insert_Row()
{
    var myTable = document.getElementById('sampleTable');
    var row = document.createElement("TR");
    var cell = document.createElement("TD");
    cell.appendChild(document.createTextNode('cacca'));
    row.appendChild(cell);
    myTable.appendChild(row);

}


function changeContent()
    {
    rn = window.prompt("Input the Row number(0,1,2)", "0");
    cn = window.prompt("Input the Column number(0,1)","0");
    content = window.prompt("Input the Cell content");  
    var x=document.getElementById('myTable').rows[parseInt(rn,10)].cells;
    x[parseInt(cn,10)].innerHTML=content;
}