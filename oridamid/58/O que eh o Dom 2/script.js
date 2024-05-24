// Node

// Toda Tag html eh representada pelo objeto Element
// e por isso herda os seus metodos e propriedades.
// Element eh um tipo de objeto Node.

const titulo = document.querySelector('h1')

titulo.innerText //retorna o texto
titulo.classList // retorna as classes
titulo.id // retorna o id
titulo.offsetHeight // retorna a altura do elemento


// titulo.addEventListener('click' , callback) // ativa a funçao callback ao click no titulo


const h1Selecionado = document.querySelector('h1')

function callbackh1() {
  console.info('Clicou em', h1Selecionado.innerText)
}

h1Selecionado.addEventListener('click',callbackh1) // adicionando evento de click + uma funcao callback


// EXERCICIO

// Retorne a url da pagina atual utilizando o objeto window
const hrefPagina = window.location.href
console.log(hrefPagina)


// Selecione o primeiro elemento da pagina que:
// póssuia a classe ativo
const elementoAtivo = document.querySelector('.ativo')

// retorne a linguagem do navegador
const linguagem = window.navigator.language
console.log(` linguagem do navegador: ${linguagem}`)

// retorne a largua da janela
const windowWidth = window.innerWidth
console.info(`largura da pagina : ${windowWidth}`)