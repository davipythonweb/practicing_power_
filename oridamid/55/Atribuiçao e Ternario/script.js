// OPERADORES DE ATRIBUIÇAO
// podem funcionar como formas abreviadas
var x = 5
var y = 10
x += y // x = x + y (15)
x -= y // x = x - y (-5)
x *= y // x = x * y (50)
x /= y // x = x / y (0.5)
x %= y // x = x % y (0)
x **= y // x = x ** y (9765625)


// OPERADOR Ternario
// Abreviaçao e condicionais (if) e (else)

var idade = 19
var ehIndependente = false
var maiorIdade = (idade >= 18 && ehIndependente) ? 'Eh maior de Idade!' : 'Não eh maior de idade.'
console.info(maiorIdade) //Eh maior de Idade

// OBS: condião ? true : false


// OBS: Geralmente utilizado quando
// quando precisamos atribuir um valor para
// uma variavel, dependendo de uma condiçao.


// if ABREVIADO

// não eh necessario abrir as chaves {}
// quando retornamos apenas uma linha de codigo

var possuiFaculdade = true
if(possuiFaculdade) console.log('possui faculdade')
else console.log('Não possui faculdade.')

// ou
if(!possuiFaculdade) // virou uma negativa ao colocar o(!)
   console.log('possui faculdade')
else 
  console.log('Não possui faculdade.')


// a ultima opçao eh mais desejada 
  


// EXERCICIO

// some 500 ao valor de scroll abaixo
// atribuindo o novo valor a scroll
var scroll = 1000

console.info(scroll + 500)

// resoluçao professor
scroll += 500
console.info(scroll)

// atribua true para a variavel darCredito,
// caso o cliente possuia carro e casa.
// e false pacaso o contrario.
var possuiCarro = true
var possuiCasa = true
var darCredito
if(possuiCarro & possuiCasa) {
  console.log(`darCredito ${'Crédito Aprovado!'}`)
} else {
  console.log('Não foi desta vez!')
}

// resoluçao professor
darCredito = (possuiCarro && possuiCasa)
console.log(darCredito)

darCredito = (possuiCarro && possuiCasa) ? 'Credito Liberado!' : 'Credito Negado!'
console.log(darCredito)