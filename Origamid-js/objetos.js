// Crie um objeto com seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome

var dados = {
  nome: "Jeferson",
  sobrenome: "Beckmann",
  cidade: "Porto Alegre",
  idade: "30",
  profissão: "estudante de TI",
};

// Crie um método no objeto anterior, que mostra o seu nome completo
dados.mostraNome = function () {
  return `${this.nome} ${this.sobrenome}`;
};

console.log(dados.mostraNome());

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var dog = {
  animal: "cão",
  raca: "labrador",
  cor: "preto",
  idade: "10 anos",
  latir(see) {
    if (see === "homem") {
      return "au au";
    } else {
      return "----";
    }
  },
};

console.log(dog.latir("homem"));
