var numRes = 0.0;

function calculator(operation)
{
  var xhttp = new XMLHttpRequest(); //Crea richiesta AJAX
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
  var n1 = parseInt(document.getElementById("n1").value);
  var n2 = parseInt(document.getElementById("n2").value);
  var log="";
  alert(n1 +" "+n2);
  switch(operation)
  {
    case "+":
    {
        numRes = n1 + n2;
        log+= "Somma di 2 valori";

    };break;
    case "-":
    {
        numRes = n1 - n2;
        log+= "Differenza di 2 valori";
    };break;
    case "*":
    {
        numRes = n1 * n2;
        log+= "Moltiplicazione di 2 valori";
    };break;
    case "/":
    {
        numRes = n1 / n2;
        log+= "Divisione di 2 valori";
    };break;
    case "R":
    {
        document.getElementById("n1").value =" ";
        document.getElementById("n2").value=" ";
        document.getElementById("res").value = " ";
        log+= "Reset dei valori";
    };break;
    case "=":
    {
      document.getElementById("res").value = numRes.toString();
      log+= "Stampa risultato calcolo";
    }
  }
  document.getElementById("log").value+= "\n" +log;
}
