var PREZZO_BASE = 0.21;

var generate = document.getElementById('generate');

generate.addEventListener('click', function(){
   var name = document.getElementById('nameSurname');
   var km = document.getElementById('numKm');
   var age = document.getElementById('age');
   var tkcost = PREZZO_BASE * km.value;
   var discount20 = (tkcost - (tkcost * 20 / 100));
   var discount40 = (tkcost - (tkcost * 40 / 100));

   if(age.value == '18-65'){
      document.getElementById('price').innerHTML = tkcost;
   }else if (age.value == 'over65'){
      document.getElementById('price').innerHTML = discount40;
   }else {
      document.getElementById('price').innerHTML = discount20;
   }
})
