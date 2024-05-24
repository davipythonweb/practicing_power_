// DOcument Object Model (DOM)

// Eh uma interface que representa documentos HTML e XML
// atravez de objetos. Com ela eh possivel manipular a estrutura,
// estilo e conteudo destes documentos.


console.info(window)
// eh o objeto global do browser
// possui diferentes metodos e propriedades

window.innerHeight //retorna a altura do browser

// OBS: Ao inspecionar o elemento
// com o Chrome, voce esta vendo a representacao
// oficial do DOM.


// window.alert('ola mundo')

const href = window.location.href

// window.alert(href)




// Windown e Document   

// Sao os objetos principais do DOM, boa parte da
// manipulacao eh feita atraves dos
//  seus metodos e propriedades.

// window.alert('Isso eh um alerta.')
// alert('Isso eh um alerta') //funciona

const h1Selecionado = document.querySelector('h1') // seleciona o primeiro h1
document.body //retorna o body

// OBS: window eh um objeto global, por
//  isso nao precisamos chamar ele
// na frente dos seus metodos e propiedades.
