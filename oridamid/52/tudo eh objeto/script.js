// TUDO EH OBJETO

// Strings, Numeros,Boolean, Objetos e mais,
//  possuem propiedades e metodos. Por isso são objetos.

// obs: uma string herda propriedades e
// métodos do construtor String()

var nome = 'Andre'

nome.length // 5
nome.charAt(1) // 'n'
nome.replace('re', 'rei') //'Andrei'
nome //'Andre'

// NUMEROS
var altura = 1.8

altura.toString() // '1.8'
altura.toFixed()  // arredondar '2'

// obs: Por um breve momento o numero
// eh envolvido em um Objeto (coerçao),
// tendo acesso assim as suas propriedades e metodos

// FUNÇOES
function areaQuadrado(lado) {
  return lado * lado
}

areaQuadrado.toString()
//"function areaQuadrado(lado) {
// return lado * lado
//}"

areaQuadrado.length  // 1