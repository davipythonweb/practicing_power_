// Boolean condicionais => existem dois tipos

var possuiGraduacao = false;
var possuiDoutorado = false;

console.info(possuiGraduacao, possuiDoutorado);

// exemplo de Boolean com condicional
if (possuiGraduacao) {
  console.log("Possui Graduação");
  var x = 10;
} else {
  console.log("Não Possui Graduação");
}

console.info(x);

// improvisando um separador
var separador = "******************************************";
console.log(separador);

// condicionais else if

var possuiFilhos = true;
var possuiAnimais = false;

if (possuiAnimais) {
  console.log("Possui Filhos e animais");
} else if (possuiFilhos) {
  console.info("Possui Filhos, mas nao possui animais");
} else {
  console.log("Não possui Filhos");
}

// Truthy e Falsy
// existem valores que retornam (true) e outros que retornam (false)
// quando verificamos uma expressao booleana

// falsy
/*
if(false)
if(0)
if(NaN)
if(nul)
if(undefined)
if('')  // ou "" ou ``
*/

// e todo o resto em javascript é truthy, ou seja valor verdaeiro

// Truthy
/*
if(true)
if(1)
if(' ')
if('andre')
if(-5)
if({})
*/

var nome = "Andre";
if (nome) {
  console.info(nome);
} else {
  console.info("Nome nao existe");
}

// Operador Lógico de negacao ==> Truthy
/*
if(!true) // false
if(!1) // false
if(!'') // true
if(!undefined) // true
if(!!' ') // true  
if(!!'') // false
*/

// voce pode utilizar o  ==> !!
// para verificar se uma expressao eh Truthy ou Falsy


// Operadores de Comparacao
// vao sempre retornar um valor booleano

10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10; // true
10 >= 11; // false

// outro operador de comparacao , se eh igaul ou nao
// o == faz uma comparacao nao tao estrita e o === faz uma
// comparacao estrita, ou seja, o tipo de dado de ser o mesmo
// quando usamos ===

10 == "10"; // true
10 == 10; // true
10 === "10"; //false
10 === 10; // true
10 != 15; // true
10 != "10"; // false
10 !== "10"; // true
