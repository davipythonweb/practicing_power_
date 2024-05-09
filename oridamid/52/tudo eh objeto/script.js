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

// ----------------------------------------------
// OBJETOS
// REVOLUCIONARAM A
// PROGRAMAÇÂO
// Web API's métodos e propriedades que permitem a
// interaçao JavaScript e Browser.
// -----------------------------------------------






// EXERCICIOS

// nomeie 3 propriedades ou metodos de strings
var nome = 'Andre'
// nome.fixed
// nome.length
// nome.slice

// nomeie 5 propriedades ou metodos de elementos DOM
var btn = document.querySelector('.btn')
// addEventListener
// appendChild
// id
// innerHTML
// outerHTML


// busque na web um objeto (metodo) capaz de interagir com
// o clipboard
// OBS:clipboard eh a parte do seu computador
// que lida com CTRL + C.
// 'https://www.treinaweb.com.br/blog/clipboard-js-copiar-e-colar-com-javascript'
