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

// Operadores Logico || ou
// Compara se uma expressao ou outra eh verdadeira
// OBS: Retorna o primeiro valor
// (true) que encontrar

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

var corFavorita = "Amarelo";

switch (corFavorita) {
  case "Azul":
    console.info("Olhe para o céu.");
    break;
  case "Vemelho":
    console.info("Olhe para as rosas.");
    break;
  case "Amarelo":
    console.log("Olhe para o sol.");
    break;
  default:
    console.info("Feche os olhos.");
}


// exercicio

// verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque 'É maior' ou 'É igual' ou 'É menor.
var minhaIdade = 29;
var idadeDoParente = 50;

if (minhaIdade > idadeDoParente) {
  console.log("É maior");
} else if (minhaIdade === idadeDoParente) {
  console.log("É igual.");
} else {
  console.log("Idade é menor!");
}

// Qual valor é retornado na seguinte expressao?
var expressao = (5 - 2) && (5 - " ") && (5 - 2);
console.log(expressao) // 3, que eh o rpimeiro valor verdadeiro


// verifique se as seguintes variaveis sao Trusty ou Falsy
var nome = "Andre";
var idade = 29;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

// Compara o total de habitantes do Brasil com a China(valor em milhoes)
var Brasil = 207;
var China = 1340;

// O que ira aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.info("Verdadeiro");
} else {
  console.info("Falso");
}

// O que ira aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.info("Gato" && "Cão");
} else {
  console.info("Falso");
}
