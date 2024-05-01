// Funçoes

// Bloco de codigo que pode ser executado e reutilizado.
// Valores podem ser passados por uma funcao e 
// amesma retorna outro valor

function areaQuadrado(lado) {
  return lado * lado
}

areaQuadrado(4) // 16
areaQuadrado(5) // 25
areaQuadrado(2) // 4
// chamada de funçao declaration

console.log(areaQuadrado(4),areaQuadrado(5),areaQuadrado(2))


// -------------------------------------------------------------------------
// improvisando um separador
var separador = "******************************************";
console.log(separador);
// -------------------------------------------------------------------------



function pi() {
  return 3.14
}

var total = 5 * pi() // 15.7
console.log(total)

// parenteses () executa uma função

// Parametros e Argumentos
// Ao criar uma função, voce pode definir paâmetros.
// Ao executar uma função, voce pode passar argmentos.

// peso e altura sao os paremtros
function imc(peso, altura) {
  var imc = peso / (altura ** 2)
  return imc
}

imc(80, 1.80) // 80 e 1.80 sao os argumentos
imc(60, 1.70) // 60 e 1.70 sao os argumentos

console.log(imc(80, 1.80)) // 24.6

// OBS: Separar por virgula cada parametro.
// Voce pode definir mais de um parametro ou nenhum.


// Parenteses executa a Função
function corFavorita(cor) {
  if(cor === 'Azul') {
    return 'Voce gosta do céu.'
  } else if(cor === 'Verde') {
    return 'Voce gosta da Floresta.'
  } else {
    return 'Voce nao gosta de cores!'
  }
}
corFavorita() //retorna 'Voce nao gosta de nada!'
console.log(corFavorita('Rosa'))


// OBS: se aoenas definirmos a função com function
// e nao executarmos a mesma, nada que estiver
//  dentro dela ira acontecer.



// Argumentos podem ser Funçoes
// chamadas de Callback, geralmente são Funções
// que ocorrem apos algum evento

addEventListener('click', function() {
  console.info('Clicou')
})
// A funçao possui dois argumentos
// Primeiro é a string 'Clicou'
// Segundo é a função anônima

// OBS:Funções anônimas são aquelas
// em que o nome da função não é
// definido, escrito como function() {} ou () => {}.


// poderia ser assim , sem ser Callback
function mostraConsole() {
  console.log('olá mundo')
}
addEventListener('click', mostraConsole) // nem precisa usar o () na funçao.
