// Para criar um Objeto

// Um objeto eh criado utilizando as chaves {}

var carro = {}
var pessoa = {}

console.info(typeof carro)  // 'object'





// Dot Notation Get
// Acesse propriedades de um objeto utilizando o ponto .

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}

var bg = menu.backgroundColor // '#84E'
menu.color = '#000fff'



menu.esconder = function() {
  console.log('escondi')
}

// Palavra-Chave this (este)
// this erá fazer uma referencia ao propio objeto.

var height1 = 120
var menu2 = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2
  },
} 

menu2.metadeHeight() // 25
// sem o this seria 60

// OBS: o this irá retornar o proprio objeto.


// Protótipo e Herança
// O objeto herda propriedades e metodos do objeto que foi utilizado 
// para criar o mesmo.

var novoMenu = {
  width: 800,
}

novoMenu.hasOwnProperty('width')
novoMenu.hasOwnProperty('height')

// o hasOwnProperty eh um metodo de object.
// verifica se existe a propriedade no objeto.




// EXERCÌCIO

// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobre nome

var pessoa = {
  nome: 'Eliote',
  sobrenome: 'Alderson',
  idade: 28,
}

pessoa.nome //'Eliote'
pessoa.sobrenome // 'Alderson'

// Crie um objeto no objeto anterior, 
// que mostre o seu nome completo.
pessoa.nomeCompleto = function() {
  return `${this.nome}  ${this.sobrenome}` // usando template string
}
pessoa.nomeCompleto()


// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  protas: 4,
  marca: 'Audi',
}
carro.preco = 3000  // simplesmente atribuir um novo valor


// Crie um objeto de um cachorro que represente
// um labrador preto com 10 anos,
//  que late ao ver homem


var dog = {
  raca: 'labrador',
  cor: 'Preto',
  idade: 10,
  latir(pessoa) {
    if(pessoa === 'homem') {
      return 'Latir!'
    } else {
      return 'Nada'
    }
  },
}