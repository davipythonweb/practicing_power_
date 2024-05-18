// Escopo de Função

// OBS: Variaveis declaradas dentro de funçoes 
// não sao acessadas fora das mesmas.

function mostrarCarro() {
  var carro = 'Maclarem'
  console.info(carro)
}

mostrarCarro() // Maclarem
// console.log(carro) // erro, carro is not defined

// Escopo evita o conflito de nomes.



// Variavel Global(Erro)

// OBS: Declarar variaveis sem a palavra chave: var, const ou let,
// cria uma variavel que pode ser acessada em qualquer escopo (global)
// isso eh um erro.

function mostrarMoto() {
  moto = 'Yamaha 125km'
  console.info(moto)
}

mostrarMoto()  // Yamaha 125km
console.info(moto) // Yamaha 125km

// 'use strict' impede isso.



// ESCOPO DE FUNÇAO (Pai)

// OBS: Variaveis declaradas no escopo pai da funçao,
// conseguem ser acessadas pelas funçoes

var bebida = 'fanta uva'

function mostrarBebida() {
  var frase = `Minha bebida eh ${bebida}.`
  console.log(frase)
}

mostrarBebida() // Minha bebida eh fanta uva.
console.info(bebida) // fanta uva



// ESCOPO DE BLOCO

// OBS: Variaveis criadas com var, vazam o bloco. Por isso
// con a introduçao do ES6 a melhor forma de declararmos
// uma variavel eh utilizando (const) e (let), pois
// estas respeitam o escopo de bloco.

if(true) {
  var carro = 'Mustang GT'
  console.info(carro) // Carro
}
console.log(carro) // Carro


if(true) {
  let carro3 = 'Skyline'
  console.info(carro3) // Carro
}
// console.log(carro3) // erro, carro3 ins not defined ( usando let, nao vaza a infomaçao do bloco.)




// var , VAZA O BLOCO
// Mesmo cmo a condiçao falsa, a variavel ainda será declarada
// utilizando hoisting e o valor ficará como undefined.

if(false) {
  var cidade = 'Wachington DC'
  console.info(cidade)
}
console.log(cidade) // undefined


// (const) e (let) no lugar de (var)

// A partir de agora vamos utilizar apenas (const) e (let) para
// declararmos variaveis.

if(true) {
  const curso = 'engenharia'
  console.log(curso)
}
// console.table(curso)  // erro, curso is not defined


// chaves {} cria um bloco

// OBS: Chaves {} criam um escopo de bloco, nao 
// confundir com a criação de objetos ={}
{
  var profissao = 'professor'
  const disciplina = 'matematica'
}

console.info(profissao) // professor
// console.info(disciplina) // erro, disciplina in not defined



// --> FOR LOOP com vazamento do bloco utilizando var

// OBS: Ao utilizar (var) dentro de um (for loop), que eh
// um bloco, o valor da variavel utilizada irá vazar
// e existir fora do loop.

for(var i = 0; i < 10; i++) {
  console.log(`Número ${i}`)
}
console.info(i)


// Const
// OBS: Mantém o escopo no bloco, impede a redeclaração
// e impede a modificação do valor da variavel, evitando
// bugs no codigo.

const mes = 'Agosto'
// mes = 'abril' // erro, nao pode modificar (const)
// const semana // erro, declarou sem valor

const data = {
  dia: 22,
  mes: 'Julho',
  ano: 2024
}

data.dia = 20
// data = 'Novembro' // erro, nao pode ser atribuido um novo valor a uma (const).




// Let
// OBS: Mantem o escopo no bloco, impede a redeclaração,
// más permite modificaçao do valor da variavel.

let ano
ano = 2024
ano++
console.log(`Ano: ${ano}`) // 2025

// let ano = 2026 // erro, redeclarou a variavel

// Geralmente vamos utilizar o (const).





// EXERCICIOS:

// por qual motivo o codigo abaixo retorna com erros?

// {
//   var cor = 'preto'
//   const marca = 'Fiat'
//   let portas = 4
// }
// console.info(var, marca, portas)


// SOLUÇAO:
{
  var cor = 'preto'
  const marca = 'Fiat'
  let portas = 4
  console.info(cor, marca, portas)
}


// ----------------------------------------

// como corrigir os erros abaixo?

// function somarDois(x) {
//   const dois = 2
//   return x + dois
// }

// function dividirDois(x) {
//   return x + dois
// }
// somarDois(4)
// dividirDois(6)


// CORREÇAO:

const dois = 2
function somarDois(x) {
  return x + dois
}

function dividirDois(x) {
  return x / dois
}
somarDois(4)
dividirDois(6)


// ---------------------------------------
// 
// O que fazer para o total retornar 500?

// var numero = 50

// for(var numero = 0; numero < 10; numero++) {
//   console.log(numero)
// }


// const total = 10 * numero
// console.log(total)


// SOLUÇÂO:
const numero = 50

for(let numero = 0; numero < 10; numero++) {
  console.log(numero)
}


const total = 10 * numero
console.log(total)
