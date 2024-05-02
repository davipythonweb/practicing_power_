// Funções_3

// EXERCÍCIO

// Crie uma função para verificar se um valor eh Truthy

function isTruthy(dado) {
  return !!dado
}


// Crie uma funçao matematica que retorne o perimetro de um quadrado
// como eu fiz kkkkk
function calculaPerimetro(var1, var2, var3, var4) {
  var perimetro = var1 + var2 + var3 + var4
  return `O perimetro do seu quadrado eh ${perimetro} cm.`
}
// como o professor fez a mesma funçao
function perimetroQuadrado(lado) {
  return lado * 4
}
// lembrando: perimetro é a soma dos quatro lados do quadrado.


// Crie uma função que retorne o seu nome completo
// ela deve possuir os parametro: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`
}

// Crie uma função que verifica se um numero eh par.

// como eu fiz
function ehPar(numeroPar) {
  if(numeroPar % 2 === 0) {
    return 'numero eh par!'
  } else{
    return 'numero nao eh par.'
  }
}
// resolucao do professor
function isEven(numero) {
  var modulo = numero % 2
  if(modulo === 0) {
    return true
  } else {
    return false
  }
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDeDado(queTipo) {
  return (typeof queTipo)
}

// addEventListener eh uma funçao nativa do Javascript
// o primeiro parâmetro eh o evento que ocorre e o segundo o Callback
// utilize essa funçao para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('click', function() {
  console.info('Davi Nascimento') //conta ao clickar  na pagina e mostra o nome
})



// Corrija o erro abaixo:

// para corrigir
/*
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193
  return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar.`
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} paises`
}

precisoVisitar(20)
jaVisitei(20)
*/

// corrigido(era só pegar a variavel e colocar fora do escopo da função ,
// para chamala depois.(usada como variavel global.))
var totalPaises = 193

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar.`
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} paises`
}

precisoVisitar(20)
jaVisitei(20)