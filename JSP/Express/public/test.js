var d  = new Date();
var chr = new Date(2018,12,25);
var diff = Math.round(( chr - d) /1000);
console.log("Secondi per Natale " + diff + " Giorni per Natale " + Math.round((diff/ (60 * 60 * 24))));