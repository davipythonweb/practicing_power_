// For loop

var videoGames = ['Switch', 'PS4', 'XBox']
videoGames.push('3DS','PSVITA') //adiciona itens

for(var item = 0; item < videoGames.length; item++) {
  console.info(videoGames[item])
}

var separar = '_0_0_0_0_0_0_0_0_0_0_'
console.info(separar)

// BREAK
// o loop irá parar caso encontre a palavra break

var consoles = ['Switch', 'PS4','3DS','XBox']
for(var i = 0; i < consoles.length; i++) {
  console.log(consoles[i])
  if(consoles[i] === 'PS4') {
    break
  }
}

var separar = '_-----------------' 
console.info(separar)



// forEach
// forEach eh um metodo que executa uma funçao
// para cada item do Array. Eh uma forma mais
// simples de utilizarmos um loop
// com arrays(ou array-like).

var cores = ['green','red','orange','lime']
cores.forEach(function(cor, index, array) {
  console.info(cor, index, array) // o argumento item será atribuido dinamicamente
})


// OBS: Podemos passar os seguintes parametros:
// (item), (index) e (array)





// Nao se confunda com a sintaxe

var numero = 0
var maximo = 5
for(;numero < maximo;) {
  console.log(numero)
  numero++
}
// NAO ACONCELHO ESCREVER DA FORMA ACIMA!
// MAS FUNCIONA NORMALMENTE.



// EXERCICIOS

// crie um array com os anos que o Brasil
// ganhou a copa
// '1959', '1952', '1970', '1994', '2002'
var campeao = ['1959', '1962', '1970', '1994', '2002']
campeao.forEach(function(vitoria){
  console.log(' O Brasil ganhou a copa de - ' +  vitoria)
}) 



// Interaja com o array utilizando um loop
//  para mostrar no console a seguinte mensagem:
// 'O Brasil ganhou a copa de ${ano}'

// resoluçao professor
for(var i = 0; i < campeao.length; i++) {
  console.log(`O Brasil ganhou a copa de - ${campeao[i]}`)
}


// Interaja com um loop nas frutas abaixo e pare
//  ao chegar em 'pera'.

var frutas = ['Banana', 'Maçã', 'Pera', 'Goiaba']
for(var fruta = 0; fruta < frutas.length; fruta++) {
  console.log(frutas[fruta])
  if(frutas[fruta] === 'Pera') {
    break
  }
}
// coloque a ultima fruta do array acima em
// uma variavel sem remover o mesmo array.

var separar = '_-----------------' 
console.info(separar)

console.log(frutas[3])
var novaFruta = frutas[3]

console.log(novaFruta)

// resoluçao do professor
var ultimaFruta = frutas[frutas.length - 1]

console.info(ultimaFruta)  // Goiaba