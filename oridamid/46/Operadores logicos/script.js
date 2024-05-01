// operadores Lógicos &&
// Compara se uma expressao ê a outra eh verdadeira (sempre retorna o valor)

// OBS: Se ambos os valores dorem true ele ira retornar o
// ultimo valor verificado Se algum valor
// for false ele ira retornar o mesmo e nao ira
// continuar a verificar os proximos

/*
true && true // true
true && false // false
false && true // false
'Gato' && 'Cão' // 'Cão'
(5 - 5) && (5 + 5) // 0
'Gato' && false // false
(5 >= 5) && (3 < 6) // true
*/

if (5 - 5 && 5 + 5) {
  console.log("Verdadeiro");
} else {
  console.log("False");
}

var condicional = 5 - 10 && 5 + 5;
if (condicional) {
  console.log("Verdadeiro", condicional);
} else {
  console.log("False");
}

// Operadr Logico ou
// Compara se uma expressao ou outra eh verdadeira
// OBS: Retorna o primeiro valor
// true que encontrar

/*
true || true // true
true || false // true
false || true // true
'Gato' || 'Cão' // 'Gato'
(5 - 5) || ( 5 + 5) // 10
'Gato' || false // Gato
( 5 >= 5) || (3 < 6) // true
*/

var condicional2 = 5 - 5 || 5 + 5 || 10 - 2; // retornou o primeiro verdadeiro
var condicional3 = 5 - 5 || (5 + 5 && 10 - 2); //retornou o ultimo verdadeiro

console.log(condicional2, condicional3);

// Switch
// Com o switch voce pode verificar de uma variavel
// eh igual a diferentes valores utilizando o (case).
// Caso ela seja igaul, voce pode fazer alguma coisa
// e utilizar a palavra chave (break) para
// cancelar a continuacao. O valor de dafault ocorrera
// caso nenhuma das anteriores seja verdadeira.

function teste() {
  console.info("teste");
}

function teste2() {
  console.log("identacao errada");
}
