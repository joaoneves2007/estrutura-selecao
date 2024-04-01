/*
Como você pode usar uma declaração if, else if, else para verificar 
se um número é múltiplo de 2, 3 ou 5 em JavaScript?
*/

let numero = 15;

if (numero % 2 === 0 && numero % 3 === 0 && numero % 5 === 0) {
    console.log("O número é múltiplo de 2, 3 e 5.");
} else if (numero % 2 === 0 && numero % 3 === 0) {
    console.log("O número é múltiplo de 2 e 3, mas não de 5.");
} else if (numero % 2 === 0 && numero % 5 === 0) {
    console.log("O número é múltiplo de 2 e 5, mas não de 3.");
} else if (numero % 3 === 0 && numero % 5 === 0) {
    console.log("O número é múltiplo de 3 e 5, mas não de 2.");
} else if (numero % 2 === 0) {
    console.log("O número é múltiplo de 2, mas não de 3 nem de 5.");
} else if (numero % 3 === 0) {
    console.log("O número é múltiplo de 3, mas não de 2 nem de 5.");
} else if (numero % 5 === 0) {
    console.log("O número é múltiplo de 5, mas não de 2 nem de 3.");
} else {
    console.log("O número não é múltiplo de 2, 3 ou 5.");
}