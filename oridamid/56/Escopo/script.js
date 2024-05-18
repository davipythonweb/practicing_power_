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