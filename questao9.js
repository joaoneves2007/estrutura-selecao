/*
Como você pode usar uma declaração if, else if, else para 
classificar um triângulo em equilátero, isósceles ou escaleno com base em 
seus lados em JavaScript?
*/

let lado1 = 5;
let lado2 = 5;
let lado3 = 5;

if (lado1 === lado2 && lado2 === lado3) {
    console.log("É um triângulo equilátero.");
} else if (lado1 === lado2 || lado1 === lado3 ||