// Verifique se a sua idade é maior do que algum parente
// Dependendo do resultado coloque no console 'É maior', 'É menor'.

var minhaIdade = 30;
var parenteIdade = 44;

if (minhaIdade > parenteIdade) {
  console.log("É maior");
} else if (minhaIdade === parenteIdade) {
  console.log("É igual");
} else {
  console.log("É menor");
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2;

if (expressao) {
  console.log("Verdadeiro", expressao);
} else {
  console.log("Falso", expressao);
}
// Verifique se as seguintes expressões são truth ou false:
var nome = !!"Jeff";
var idade = !!30;
var possuiDoutorado = !!false;
var empregoFuturo;
var dinheiroNaConta = !!81.0;

console.log(nome, idade, possuiDoutorado, !!empregoFuturo, dinheiroNaConta);

// Compare o total de habitantes do Brasil com a china (valor em milhares):
var brasil = 207;
var china = 1340;

if (china > brasil) {
  console.log("China tem mais habitantes que o Brasil");
} else {
  console.log("Brasil tem mais habitantes que a China");
}

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
} // falso

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 - 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
} // Cão
