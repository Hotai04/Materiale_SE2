var numRes = 0.0;

function calculator(operation)
{
  var n1 = parseInt(document.getElementById("n1").value);
  var n2 = parseInt(document.getElementById("n2").value);
  op = document.getElementById(operation).id;
  var log="";
  alert(n1 +" "+n2+" "+op);
  switch(op)
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
