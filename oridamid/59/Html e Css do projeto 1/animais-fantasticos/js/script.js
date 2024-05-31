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