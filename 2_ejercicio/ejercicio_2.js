// Arnoldo le gustan mucho los números y quiere saber más de ellos, él denomina
// números cool a los que son divisibles entre 5, el quiere crear un programa en el
// cual el ingrese un número y le diga si es cool o no, ¿puedes ayudarlo?

//numeroProblema = prompt ("Escribe un número");

//if (numeroProblema % 5 == 0) {
    //console.log("Este número es un número cool");
//} else {
    //console.log ("Este número no es un número cool");
//}

// Humberto está repartiendo códigos por toda la ciudad. El quiere crear un programa
// que cuando un usuario ingrese un código este despliegue un mensaje. Para el
// código "happy" el quiere desplegar el mensaje "cool bro, the life is short" y para el
// código "sad" él quiere, desplegar el mensaje "go for tacos bro, tacos = smile"
// ** Desplegar el mensaje "código inválido" si el código no cumple con las condiciones anteriores

//emocion = prompt ("¿Cómo te sientes? ¿Happy o Sad?");

//if (emocion=="Happy") {
    //console.log("cool bro, the life is short");
  //} else if (emocion == "Sad") {
    //console.log("go for tacos bro, tacos = smile");
  //} else {
    //console.log("Código inválido");
  //}

// Paco está haciendo un videojuego y necesita hacer un programa que determine la
// jerarquía de usuario de acuerdo a su nivel, las jerarquías son "paladin" : nivel 0 -10,
// "caballero dorado" : nivel 11 - 30, "dios destructor": 31 - 50.

//nivel = prompt ("Ingresa tu nivel");

//if (nivel >=0 && nivel <=10){
   // console.log("Eres paladín");
//} else if (nivel >=11 && nivel <=30) {
   // console.log ("Eres Caballero Dorado");
//} else if (nivel >=31 && nivel <=50) {
   // console.log ("Dios destructor");
//} else {
   // console.log("Nivel no válido");
//}



// Crea una aplicación web empleando JavaScript que permita a dos usuarios jugar una partida de piedra, papel o tijeras.

// Pide al jugador1 y al jugador2 que escriban su elección mediante prompts. Compara los valores ingresados y muestra en pantalla, mediante un alert o console.log, quién fue el jugador ganador. && ||

//jugador1 = prompt ("JUGADOR 1 Ingresa Piedra, Papel o Tijera");
//jugador2 = prompt ("JUGADOR 2 Ingresa Piedra, Papel o Tijera");

//if (jugador1=="Piedra" && jugador2=="Piedra"){
    //console.log("Empate");
//} else if (jugador1=="Piedra" && jugador2=="Papel"){
   // console.log("Jugador 2 gana, papel gana a piedra");
//} else if (jugador1=="Piedra" && jugador2=="Tijera"){
   // console.log("Jugador 1 gana, piedra gana a tijera");
//} else if (jugador1=="Papel" && jugador2=="Papel"){
   // console.log("Empate");
//} else if (jugador1=="Papel" && jugador2=="Piedra"){
   // console.log("Jugador 1 gana, papel gana a piedra");    
//} else if (jugador1=="Papel" && jugador2=="Tijera"){
    //console.log("Jugador 2 gana,tijera gana a papel"); 
//} else if (jugador1=="Tijera" && jugador2=="Piedra"){
    //console.log("Jugador 2 gana, piedra gana a tijera"); 
//} else if (jugador1=="Tijera" && jugador2=="Papel"){
    //console.log("Jugador 1 gana, tijera gana a papel"); 
//} else if (jugador1=="Tijera" && jugador2=="Tijera"){
    //console.log("Empate"); 
//}else{
    //console.log("Inválido");
//}


// Crea una aplicación web con JavaScript que reciba tres números digitados por el usuario, mediante prompts, y muestre en pantalla, mediante un alert, cuál es el mayor de los tres números. 

//numero1=prompt("Escribe el primer número");
//numero2=prompt("Escribe el segundo número");
//numero3=prompt("Escribe el tercer número");

//if(numero1 > numero2 && numero1> numero3) {
   // alert(`el número mayor es el ${numero1}`);
//} else if (numero2 > numero1 && numero2> numero3) {
   // alert(`el número mayor es el ${numero2}`); 
//} else if (numero3 > numero1 && numero3> numero1) {
  //  alert(`el número mayor es el ${numero3}`);      
//} else {
    //alert("No válido");
//}