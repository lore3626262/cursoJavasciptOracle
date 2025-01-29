//1.Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
/*let diaSemana=prompt("que dia de la semana es:?");
if(diaSemana =="Sábado" || diaSemana=="Domingo"){
    alert('¡Buen fin de semana!')

}else{
    alert('¡Buena semana!')
}
    */

//2.Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
/*let numeroUno=prompt("ingrese un numero");
if (numeroUno>0){
    alert('numero positivo');
}else  if (numeroUno<0){
    alert('numero negativo');
   }else{
    alert('el numero es cero');
   }
    */
 //3.  Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".

 let puntacio=100;

 if(puntacion>=100){
    alert('felicidades has ganado')
 }else{
    alert('Intentalo nuevamente')
 }

 // Mostrar saldo de cuenta con template string
let saldo = 1500; // Puedes cambiar este valor o pedirlo al usuario
alert(`Tu saldo actual es: $${saldo}`);

// Pedir el nombre y mostrar mensaje de bienvenida
let nombre = prompt("Ingresa tu nombre:");
alert(`¡Bienvenido, ${nombre}! 😃`);
