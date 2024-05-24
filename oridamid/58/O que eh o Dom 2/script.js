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

h1Selecionado.addEventListener('click', function() {
  console.info('Clicou em', h1Selecionado.innerText)
})