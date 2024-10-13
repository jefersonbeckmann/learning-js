function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}

console.log(imc(60, 1.78));

//============================================

function corFavorita(cor) {
  if (cor === "Azul") {
    return "Eu gosto do céu";
  } else if (cor === "Verde") {
    return "Eu gosto de mato";
  } else {
    return "Eu não gosto de cores";
  }
}

console.log(corFavorita("Azul"));

//==============================================

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Por favor preencha o campo do console com a sua idade";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade("trinta"));