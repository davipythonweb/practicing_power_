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
console.info(gridSection[0])

// Seletor Geral Unico

// querySelector => retorna o primeiro elemento
//  que combinar com o seu seletor CSS.

const animais = document.querySelector('.animais')
const contato2 = document.querySelector('#contato')
const ultimoItem = document.querySelector('.animais-lista li:last-child')
const linkCss = document.querySelector('[href^="https://"]')
const primeiroUl = document.querySelector('ul')

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
console.log(gridSection2[1])


// OBS: Diferente do getElementByClassName, 
// a lista aqui eh estatica. 



// HTMLCollection vs NodeList

// OBS: A diferença esta no smetodos e propiedades
// de ambas.Alem disso a NodeList retornada com
// querySelectorAll eh estatica.

const titulo = document.querySelector('.titulo')
const gridSectionHTML = document.getElementsByClassName('grid-section')
const gridSectionNode = document.querySelectorAll('.grid-section')

titulo.classList.add('grid-section')

console.info(gridSectionHTML) // 4 itens
console.info(gridSectionNode) // 3 itens