var kmviaggio = prompt("Quanti chilometri vuoi percorrere?");
var eta = prompt("Qual è la tua età?");
var prezzobase = 0.21;
var prezzotk = prezzobase * kmviaggio;

if (eta < 18){
   document.getElementById('buy').innerHTML = "Il tuo biglietto costa " + prezzotk * 0.8 + "€";
}else if (eta > 65){
   document.getElementById('buy').innerHTML = "Il tuo biglietto costa " + prezzotk * 0.6 + "€";
}else{
   document.getElementById('buy').innerHTML = "Il tuo biglietto costa " + prezzotk + "€";
}
