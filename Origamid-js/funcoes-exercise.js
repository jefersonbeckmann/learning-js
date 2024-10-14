// Crie uma função para verificar se um valor é Truthy

function verification(teste) {
  if (teste == true) {
    return "Essa função é Truthy";
  } else {
    return "Essa função é falsa";
  }
}

console.log(verification(5 >= 5));

// Crie uma função matemática que retorne o perímetro de um quadrado lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetro(lado) {
  return lado + lado + lado + lado;
}

console.log(perimetro(10));
// 1

// Crie uma função que retorne o seu nome completo ela deve possuir os parâmetros: nome e sobrenome

// function nomeCompleto(nome, sobrenome) {
//   return nome + sobrenome;
// }

// console.log(nomeCompleto("Jeferson", "Beckmann"));

// // Crie uma função que verifica se um número é par
// function multiploDeDois(teste) {
//   if (teste % 2 === 0) {
//     return "É par";
//   } else {
//     return "É ímpar";
//   }
// }

// console.log(multiploDeDois(6));

// Crie uma função que retorne o tipo de dado do argumento passado nela (typeof)

// addEventListener é uma função nativa do JavaScript o primeiro parâmetro é o evento que ocorre e o segundo o Callbach
