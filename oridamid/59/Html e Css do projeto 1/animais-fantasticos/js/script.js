// ID
// getElementById ->seleciona e retorna elementos do DOM
// OBS:javascript eh caseSensitive

// CONTEUDO DA AULA 59 ATE 67

// seleciona ID
const animamaisSection = document.getElementById('animais')
const contatoSection = document.getElementById('contato')

// retorna null caso nao exista
const naoExiste = document.getElementById('teste')


// CLasses e Tag
// getElementsByClassName e getElementsByTagName
// OBS:selecionam e retornam uma lista de elementos
// do DOM. A lista retornada está ao VIVO, significa
// que se elementos forem adicionados, ela 
// sera automatimaente atualizada.

// seleciona pela classe, retorna uma HTMLCollection
const gridSection = document.getElementsByClassName('grid-section')
const contato = document.getElementsByClassName('grid-section contanto')


// seleciona todas as UL's, retorna uma HTMLCOllection
const ul = document.getElementsByTagName('ul')


// retorna o primeiro elemento
// console.info(gridSection[0])




// Seletor Geral Unico

// querySelector => retorna o primeiro elemento
//  que combinar com o seu seletor CSS.

const animais = document.querySelector('.animais')
const contato2 = document.querySelector('#contato')
const ultimoItem = document.querySelector('.animais-lista li:last-child')
const linkCss = document.querySelector('[href^="https://"]')
const primeiroUl = document.querySelector('ul')

const linkInterno = document.querySelector('[href^="#"]') // pegando o primeiro link interno


// Busca dentro do Ul apenas
const navItem = primeiroUl.querySelector('li')



// Seletor Geral Lista

// querySelectorAll => retorna todos os elementos
// compativeis com o seletor CSS em uma NodeList

const gridSection2 = document.querySelectorAll('.grid-section')
const listas = document.querySelectorAll('ul')
const titulos = document.querySelectorAll('.titulo')
const fotosAnimais = document.querySelectorAll('.animais-lista ')

// Retorna o segundo elemento
// console.log(gridSection2[1])


// OBS: Diferente do getElementByClassName, 
// a lista aqui eh estatica. 



// HTMLCollection vs NodeList

// OBS: A diferença esta nos metodos e propiedades
// de ambas.Alem disso a NodeList retornada com
// querySelectorAll eh estatica.

const titulo = document.querySelector('.titulo')
const gridSectionHTML = document.getElementsByClassName('grid-section')
const gridSectionNode = document.querySelectorAll('.grid-section')

titulo.classList.add('grid-section')
// primeiroUl.classList.add('grid-section') adiciona uma classe na ul

// 4 itens, nao funciona o forEach()
// console.info(gridSectionHTML) 

// 3 itens, funciona o forEach()
// console.info(gridSectionNode) 




// Array-Like

// OBS: HTMLCollection e NodeList são array-like, parecem uma array
// mas não são. O método de Array forEach() por exemplo,
// existe apenas em NodeList.

const gridSection3 = document.querySelectorAll('.grid-section')

gridSection3.forEach(function(gridItem, index, array) {
  gridItem.classList.add('azul')
  // console.info(index) // index do item no array
  // console.info(array) // o array completo
})

// tranformando array-like em um array
const arrayGrid = Array.from(gridSectionHTML) // agora funciona o forEach()





// EERCICIOS
// retorne no console todas as imagens do site
const imagensAll = document.querySelectorAll('img')

// retorne no console apenas as imagens que começarem com a palavra imagem
const imagenImag = document.querySelectorAll('img[src^="images/imagem"]')
// console.log(imagenImag)

// selecione todos os links internos (onde o href começa com #)
const linksAll = document.querySelectorAll('[href^="#"]')

// selecione o primeiro h2 dentro de .animais-descricao
const h2Animais = document.querySelector('.animais-descricao h2')

// selecione o ultimo p do site

// pegando todos os paragrafos
const ultimoParagrafo = document.querySelectorAll('p')

// pegando somente o ultimo p 
// console.log(ultimoParagrafo[ultimoParagrafo.length -1])

// outra forma de pegar o ultimo p 
// console.info(ultimoParagrafo[--ultimoParagrafo.length]) 





// forEach
// OBS: Constantemente vamos selecionar uma lista de itens do DOM.
// A melhor dorma para interagirmos com os mesmos eh utilizando
//  o metodo forEach()

const imgs = document.querySelectorAll('img')
// mostrando todas as imagens com loop forEach
imgs.forEach(function(item) {
  
  // console.info(item)
})

// Parâmentros do forEach
// OBS: O primeiro parametro eh o callback, ou seja, a
// funçao que será ativada a cada item.
// Esta função pode receber tres parametros: valorAtual, index e array.


const imgs2 = document.querySelectorAll('img')

// mostrando todas as imagens com loop forEach
imgs2.forEach(function(valorAtual,index,array) {

  // o item atual no loop
  // console.info(valorAtual)

  // o numero do index
  // console.info(index)

  // o array completo
  // console.info(array)
})



// foreach e Array
// OBS: forEach eh m metodo de Array, alguns objetos
// array-like possuem este metodo. Caso não possua, o ideal eh
// transforma-los em uma array.

// array-like que eh um = HTMLCollection
const titulos2 = document.getElementsByClassName('titulo')
// transformando array-like para array
const titulosArray = Array.from(titulos2)

// loop forEach nos titulos do array
titulosArray.forEach(function(valorAtual) {

  // console.log(valorAtual)
})




// Arrow Function
// OBS: Sintaxe curta em relação a function expression.
// Basta remover a palavra chave (function) e 
// adicionar a fat arrow => após os argumentos.
// EXEMPLO:
const ul2 = document.querySelectorAll('ul')

// forma encurtada de forEach com Arrow Function 
ul2.forEach((item) =>{

  // console.log(item)
})


// Argumentos e Parenteses
const imgs3 = document.querySelectorAll('img')

// argumento unico nao precisa de parenteses
imgs3.forEach(item => {
  // console.log(item)
})


// multiplos argumentos precisam de parentes
imgs3.forEach((item, index) => {
  // console.log(item, index)
})

// sem argumentos precisa dos parentes, mesmo vazio

let i = 0
imgs3.forEach(() => {
  // console.log(i++)
})

// qundo só tem uma linha de código, não eh necessario as chaves {}
// let k = 10
// imgs3.forEach((item) => console.log(i++))


// OBS: Eh melhor sempre utilizar os parenteses!!!


// EXERCICIOS:

// Mostre no console cada paragrafo do site
const paragrafoAll = document.querySelectorAll('p')
paragrafoAll.forEach((valorAtual) => {
  // console.info(valorAtual)
})

// Mostre o texto dos paragrafos no console
paragrafoAll.forEach((valorAtual) => {
  // console.log(valorAtual.innerText)
})



// Class List

// OBS: retorna uma lista com as classes do elemento. 
// Permite adicionar, remover e verificar se contém.

const menu = document.querySelector('.menu')

// menu.className // string
// menu.classList // lista de classes
// menu.classList.add('ativo')
// menu.classList.add('ativo', 'mobile') // duas classes
// menu.classList.remove('ativo')
// menu.classList.toggle('ativo') // adiciona / remove a classe
// menu.classList.contains('ativo') // retorna um valor booleano true ou false
// menu.classList.replace('ativo', 'inativo') 


// Atributes
// OBS: Retorna uma array-like com os atributos do elemento.

const animais2 = document.querySelector('.animais')

// animais2.attributes // todos os atributos
// animais2.attributes[0] // retorna o primeiro atributo



// getAttribute e setAttribute

// OBS:Métodos que retornamou definem de acordo
// com o atributo selecionado
const img = document.querySelector('img')

// img.getAttribute('src') // valor do src
// img.setAttribute('alt', 'TextoAlternativo') //muda o alt
// img.hasAttribute('id') // true ou false
// img.removeAttribute('alt') // remove o alt

// img.hasAttributes() // true / false se tem algum atributo

// eh muito comu metodos de get e set.


// Read Only vs Writable

// obs: Existem propiedades que nao permitem
// a mudança de seus valores, essas sao considerados Ready Only,
// ou seja, apenas leitura.

const animais4 = document.querySelector('.animais')

// animais4.className // string com nome das classes
// animais4.className = 'azul' // substitui completamente a string
// animais4.className += 'vermelho' // adiciona vermelho a string

// animais4.attributes = 'class="ativo"' // nao funciona, read-only


// OBS:Lembre-se que podemos modificar
// o valor de uma propiedade objeto.propiedade = ''




// EXERCICIO

// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a')

itensMenu.forEach((item) => {
  item.classList.add('ativo')
})
// Remova a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item) => {
  item.classList.remove('ativo')
})

// adicionou só no primeiro
itensMenu[0].classList.add('ativo')

// verifique se as imagens possuem o atributo alt
const imgAlts = document.querySelectorAll('img')

imgAlts.forEach((img) => {
  const possuiAtributo = img.hasAttribute('alt')
  // console.info(img, possuiAtributo)
})

// modifique o href do link externo no menu

const linkExterno = document.querySelector('a[href^="http"]')

linkExterno.setAttribute('href', 'https://google.com')

// console.info(linkExterno)






// DIMENÇOES E DISTANCIAS

// Height e Width
// Estas sao propiedades e metodos dos objetos Element
// e HTMLElement, a maioria delas sao Read Only

const section2 = document.querySelector('.animais-lista')

section2.clientHeight // height + padding
section2.offsetHeight // height + padding + border
section2.scrollHeight // height total, mesmo dentro de scrol

// mesma coisa para o Width,
// clientWidth



// offsetTop e offsetLeft
const section3 = document.querySelector('.copy')

// Distancia entre o topo do elemento e o topo da página
section3.offsetTop

// Distancia entre o canto esquerdo do elemento
//  e o canto esquerdo da pagina
section3.offsetLeft


// getBoundingClientRect()
// obs:Metodo que retorna um objeto com valores
//  de width,height distancias do elemento e mais.

const section4 = document.querySelector('.animais-lista')

// como se fosse as coordenadas de um elemento
const rect = section4.getBoundingClientRect()

rect.height // height do elemento
rect.width // width do elemento
rect.top // distancia entre o topo do elemento e o scroll


// Window

window.innerWidth // largura da janela
window.outerWidth  //largura da janela , soma o dev tools tambem
window.innerHeight // altura da janela
window.outerWidth // altura da janela + soma a barra de endereço

window.pageYOffset // distancia total do scroll horizontal
window.pageXOffset // distancia total do scroll vertical

if(window.innerWidth < 600) {
  // console.log('Tela menor que 600px')
} else {
  // console.info('Tela maior que 600px')
}



// matchMedia()
// obs: Utilize um media-queri como no CSS
// para verificar a largura do bowser.

const small = window.matchMedia('(max-width: 600px')

if(small.matches) {
  // console.log('Tela menor que 600px')
} else {
  // console.log('Tela maior que 600px')
}



// EXERCICIO:


// Verifique a distancia da primeira imagem
// em relação ao topo da pagina
const imgDistancia = document.querySelector('img')
console.info(` distancia da imagem até o topo: ${imgDistancia.offsetTop}`)


// Retorne a soma da largura de todas as imagens
function somaImagens(){

  const imgAll = document.querySelectorAll('img')
  let soma = 0

  imgAll.forEach((image) => {
    soma += image.offsetWidth
  })

  console.log(` soma de todas as images ${soma}`)
}

window.onload = function() {
  somaImagens()
}



// verifique se os links da pagina 
// possuem o minimo recomendado para todos
// utilizados com o dedo. (48px/48px de acordo com o google)
const AllLinks = document.querySelectorAll('a')
AllLinks.forEach((link) => {
  
  const linkWidth = link.offsetWidth
  const linkHeight = link.offsetHeight
  
  if(linkWidth >= 48 && linkHeight >= 48) {

    console.info(link, 'possui boa acessibilidade')
  } else {
    console.info(link, 'não possui boa acessibilidade')
  }
})

// se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu.
const browserSmall = window.matchMedia('(max-width: 720px)').matches

if(browserSmall) {
  const menuMobile = document.querySelector('.menu')
  menu.classList.add('menu-mobile')
}

