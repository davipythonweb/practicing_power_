// ARRAY

// Eh um grupo de valores geralmente relacionados.
// Servem para guardarmos diferentes calores 
// em uma unica variavel.

var videoGames = ['Switch', 'PS4', 'XBox']

videoGames[0]
videoGames[2]

// acesse um elemento do array utilizando []



// METODOS E PROPRIEDADES DE um Array


var consoles = ['Switch', 'PS4', 'XBox']

consoles.pop // Remove o ultimo item e retorna ele
consoles.push // adiciona ao final do array
consoles.length // 3 , conta quantos elementos ha no array


// OBS:Existem diversos outros metodos,
// como => (map), (reduce), (forEach) e
// mais que veremeos mais a frente.


// OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
// For Loop

// Fazem algo repetidamente até 
// que uma condiçao seja atingida.

for (var numero = 1; numero <= 10; numero++) {
  console.info(numero) // retorna de 0 a 9.
}

// OBS: o for loop possui 3 partes:
// (inicio), (condiçao) e (incremento).

var espaço = ('-------------------------')
console.log(espaço)

// While Loop
var i = 0
while (i <= 10) {
  console.info(i)
  i = i + 3 // retorna de 0 a 9 no c0nsole
}

// o for loop eh mais comum