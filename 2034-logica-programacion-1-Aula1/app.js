
// Variables 
let numeroSecreto = 4;
let numeroUsuario = 0;
let intentos = 0; // Inicializamos a 0 para contar correctamente
let palabraVeces = 'vez';

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");
    numeroUsuario = parseInt(numeroUsuario); // Convertimos la entrada a número
    if (isNaN(numeroUsuario)) { // Verificamos si la entrada no es un número válido
        alert('Por favor, ingresa un número válido.');
        continue; // Si no es un número, se reinicia el ciclo
    }

    intentos++; // Incrementamos el contador al inicio de cada intento

    console.log(numeroUsuario);
    if (numeroUsuario == numeroSecreto) {
        // Acertamos, fue verdadera la condición
        if (intentos == 1) {
            palabraVeces = 'vez'; // Singular si fue solo un intento
        } else {
            palabraVeces = 'veces'; // Plural si fueron varios intentos
        }
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${palabraVeces}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
    }
}
