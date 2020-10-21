var kmviaggio = prompt("Quanti chilometri vuoi percorrere?");
var eta = prompt("Qual è la tua età?");
var prezzobase = 0.21;
var prezzotk = prezzobase * kmviaggio;

if (eta < 18){
   document.getElementById('buy').innerHTML = "Il tuo biglietto costa " + (prezzotk - (prezzotk * 20 / 100)).toFixed(2) + "€";
}else if (eta > 65){
   document.getElementById('buy').innerHTML = "Il tuo biglietto costa " + (prezzotk - (prezzotk * 40 / 100)).toFixed(2) + "€";
}else{
   document.getElementById('buy').innerHTML = "Il tuo biglietto costa " + prezzotk.toFixed(2) + "€";
}
