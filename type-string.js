const texto1 = '"Hello, world!"';
const texto2 = 'quero "café"';
console.log(texto1);
console.log(texto2);

console.log("=-=-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
// CONCATENAÇÃO
console.log("CONCATENAÇÃO");
const citação = 'Ribeirão disse: ' + texto1;
console.log(citação);
console.log(citação+' e '+texto2);

console.log("=-=-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");

// Codificação UTF
console.log("Codificação UTF");

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

console.log("=-=-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");

// Comparação 
console.log("Comparação");
const cidade1 = "belo horizonte";
const cidade2 = "Belo Horizonte";

console.log(cidade1 === cidade2); // false
console.log("=-=-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");

const cidadeMinuscula = cidade2.toLowerCase();
console.log(cidade1 === cidadeMinuscula);
console.log("=-=-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");

const aux1 = 3;
const aux2 = "3";

console.log(aux1 == aux2); // comparar o valor, independente do tipo da variável
console.log(aux1 === aux2); // compara o valor e o tipo da variável
