/*
Como você pode usar uma declaração if, else if, else para 
determinar se uma idade corresponde a bebê, criança, adolescente, adulto ou 
idoso em JavaScript?
*/

let idade = 30;

if (idade >= 0 && idade <= 2) {
    console.log("A idade corresponde a um bebê.");
} else if (idade >= 3 && idade <= 12) {
    console.log("A idade corresponde a uma criança.");
} else if (idade >= 13 && idade <= 19) {
    console.log("A idade corresponde a um adolescente.");
} else if (idade >= 20 && idade <= 64) {
    console.log("A idade corresponde a um adulto.");
} else if (idade >= 65 && idade <= 120) {
    console.log("A idade corresponde a um idoso.");
} else {
    console.log("A idade inserida não é válida.");
}let idade = 30;