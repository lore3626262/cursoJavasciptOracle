//1.Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
/*let diaSemana=prompt("que dia de la semana es:?");
if(diaSemana =="Sábado" || diaSemana=="Domingo"){
    alert('¡Buen fin de semana!')

}else{
    alert('¡Buena semana!')
}
    */

//2.Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
let numeroUno=prompt("ingrese un numero");
if (numeroUno>0){
    alert('numero positivo');
}else  if (numeroUno<0){
    alert('numero negativo');
   }else{
    alert('el numero es cero');
   }
