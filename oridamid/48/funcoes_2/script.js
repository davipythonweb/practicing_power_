// Funçoes

// Valores Retornados 
// Uma Função pode retornar qualquer
//  tipo de dados e até outras funçoes.

function terceiraIdade(idade) {
  if(typeof idade !== 'number') {
    return 'Informe a sua idade!'
  } else if(idade >= 60) {
    return true
  } else {
    return false
  }
}

console.log(terceiraIdade(80))
// OBS: cuidado, retornar diferentes tipos de dados 
// na mesma função não eh uma boa ideia.

// ESCOPO

// Variaveis e funçoes definidas dentro de um bloco {} , 
// não sao visiveis fora dele.

function precisoVisitar(paisesVisitados) {
  var totalPaises = 193
  return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar! `
}

console.log(precisoVisitar(30))




// ESCOPO Léxico
// funções conseguem acessar variaveis 
// que foram criadas no contexto pai.

var profissao = 'Designer'

function dados() {
  var nome = 'André'
  var idade = 28
  function outrosDados() {
    var endereco = 'Rio de Janeiro'
    var idade = 29
    return `${nome}. ${idade}, ${endereco}, ${profissao}`
  }
  return outrosDados()
}

console.info(dados()) // Retorna 'André, 29, Rio de Janeiro, Designer'
// outrosDados() // retorna um erro




// HOSTING
// Antes de executar uma funçao, o Javascript 'move'
// todas as funçoes declaradas para a memoria.

imc(80, 1.80)

function imc(peso, altura) {
  const imc = peso / (altura ** 2)
  console.info(imc)
}