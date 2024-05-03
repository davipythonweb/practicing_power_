// OBJETOS

// Conjunto de variaveis, que sao chamadas de propriedades e metodos.

var pessoa = {
  nome: 'Andre',
  idade: 28,
  profissao: 'Designer',
  possuiFaculdade: true,
}

pessoa.nome //Andre
pessoa.possuiFaculdade // true

// propriedade e metodos consistem em nome (chave) e valor




// METODOS

// É uma propriedade que possui funçao no local do seu valor.

var quadrado = {
  lados : 4,
  area: function(lado) {
    return lado * lado
  },
  perimetro: function(lado) {
    return this.lados * lado
  },
}

  quadrado.lados // 4
  quadrado.area(5) // 25
  quadrado.perimetro(5) // 20



// OBS: this => faz refenrencia ao proprio objeto

// METODOS: Abreviaçao de area: function() {} para area() {}, no ES6+

// exemplo: perimetro de retangulo: 2 * base + 2 * altura
// exemplo: area de retangulo: base * altura

var retangulo = {
  area(base, altura) {
    return base * altura
  },
  perimetro(base, altura) {
    return 2 * base + 2 * altura
  },
  diagonal(base , altura) {
    return 2 ** base + 2 ** altura
  },
}

retangulo.area()
retangulo.perimetro()
retangulo.diagonal()



// ORGANIZAR O CODIGO---------------------------

// Objetos servem para organizar o codigo em pequenas 
// partes reutilizaveis

Math.PI //3.14
Math.random() //numero aleatorio

var pi = Math.PI
console.info(pi) ; // 3.14

// Math é um objeto nativo de Javascript.
// Já percebeu que console eh um objeto e log() um metodo?