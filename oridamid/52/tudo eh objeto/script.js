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

// ---------------------------------------------------------
// ELEMENTOS DO DOM

/* <a class="btn"></a> */
var btn = document.querySelector('.btn')

btn.classList.add('azul') // adiciona a classe azul
btn.innerText // 'Clique'
btn.addEventListener('Click', function() {
  console.info('Clicou')
})

// Praticamente todos os efeitos
// com o JS são feitos utilizando
// propriedades e metodos de 
// objetos DOM.