// A ordem importa

var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = (20 / 2) * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

// comeca  sempre com multiplicacao e divisao e depois adicao e subtracao
// o parenteses prioriza o que vem primeiro

// operadores aritmeticos Unários

var incremento = 5;

console.info(incremento++);

console.info(incremento);

var incremento2 = 5;
console.log(++incremento2);

console.info(incremento2);

console.log(--incremento2); //decremento

// mais operadores unarios
var frase =
  "Isso eh um teste" +
  frase - //naN
  frase + // NaN
  idade - // 28(numero)
  idade; // -28 (numero)
var idade = "28";
var somaIdade = 5;
console.info(+idade + somaIdade);
console.info(-idade + somaIdade);

// transformando string em numero
var novaIdade = +"38";
console.info(novaIdade);

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1

// exercicio
// qual o resultado da seguinte expressao?
var total = 10 + (5 * 2) / 2 + 20;
console.info(total);
// crie duas espressoes que retornam NaN
var expresao1 = (20 / "rato") * 2;
console.info(expresao1);

var expresao2 = "gato" - 5;
console.info(expresao2);

// somar a string '200' com o numero 50 e retornar 250
var somaNumero = +"200" + 50;
console.info(somaNumero);

// incremente o numero 5 e retorme o seu valor incrementado
var x = 5;
console.log(++x);

// como dividir o peso por 2?
var numeroPeso = +"80" / 2;
var unidade = "kg";
var peso = numeroPeso + unidade;

console.log(peso);
