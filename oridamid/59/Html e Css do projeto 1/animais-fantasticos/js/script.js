// ID
// getElementById ->seleciona e retorna elementos do DOM
// OBS:javascript eh caseSensitive


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





