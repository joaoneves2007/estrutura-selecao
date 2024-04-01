/*
Como você pode usar uma declaração if, else if, else para 
classificar um triângulo em equilátero, isósceles ou escaleno com base em 
seus lados em JavaScript?
*/

let lado1 = 5;
let lado2 = 4;
let lado3 = 5;

if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
    console.log("Os lados do triângulo devem ter valores positivos.");
} else if (lado1 + lado2 <= lado3 || lado1 + lado3 <= lado2 || lado2 + lado3 <= lado1) {
    console.log("Os lados fornecidos não formam um triângulo.");
} else if (lado1 === lado2 && lado2 === lado3) {
    console.log("O triângulo é equilátero, todos os lados têm o mesmo comprimento.");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("O triângulo é isósceles, possui dois lados com o mesmo comprimento.");
} else {
    console.log("O triângulo é escaleno, todos os lados têm comprimentos diferentes.");
}