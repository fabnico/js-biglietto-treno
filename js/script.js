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
      document.getElementById('price').innerHTML = tkcost.toFixed(2);
   }else if (age.value == 'over65'){
      document.getElementById('price').innerHTML = discount40.toFixed(2);
   }else {
      document.getElementById('price').innerHTML = discount20.toFixed(2);
   }

   document.getElementById('name').innerHTML = name.value;
   document.getElementById('offer').innerHTML = age.value;
   document.getElementById('seat').innerHTML = Math.floor(Math.random() * (30 - 1)+1);
   document.getElementById('cp').innerHTML = Math.floor(Math.random() * (100000 - 90000) +90000);

   document.getElementById('show').style.display = 'block';
})
