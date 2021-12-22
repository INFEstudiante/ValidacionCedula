function validarCedula(cedula){
    
  var c = document.getElementById('cedula').value;
 
 // var c = ced.replace(/-/g,'');  
  var cedula = c.substr(0, c.length - 1);  
  var verificador = c.substr(c.length - 1, 1);  
  var suma = 0;  
  var cifra=0;
  //var cedulaValida = 0;

  if(c.length < 11) { return false; }  
  for (i=0; i < cedula.length; i++) {  
      mod = "";  
       if((i % 2) == 0){mod = 1} else {mod = 2}  
       res = cedula.substr(i,1) * mod;  
       if (res > 9) {  
            res = res.toString();  
            uno = res.substr(0,1);  
            dos = res.substr(1,1);  
            res = eval(uno) + eval(dos);  
       }  
       suma += eval(res);  
  }  
  cifra = (10 - (suma % 10)) % 10;  

  if (cifra == verificador && cedula.substr(0,3) != "000") {  
    document.getElementById('resultado').innerHTML = '<p> ¡¡Cédula valida !! </p>';
    alert("la suma es: "+ suma);
  }  
  else   {  
    document.getElementById('resultado').innerHTML = '<p> ¡¡Cédula invalida !! </p>';
    alert("la suma es: "+ suma);
  }  


}//fin de function validarCedula.
