let valor;
let tentativasRestantes;
function jogar() {
  valor = Math.floor(Math.random() * 11);
  tentativasRestantes = 2;
  document.getElementById("chute").value = "";
  document.getElementById("div_main").style.display = "flex";
  document.getElementById("res").style.display = "none";
}
function chutar() {
  for (let i = 0; i < 2; i++) {
    verificar();
    if (tentativasRestantes <= 0) {
      break;
    }
  }
}
function verificar() {
  let chute = document.getElementById("chute").value;

  chute = Number(chute);

  if (chute < 0 || chute > 10 || isNaN(chute)) {
    alert("Por favor, Insira um número válido!");
    tentativasRestantes = 0;
  }

  let res = document.getElementById("res");
  res.style.display = "flex";

  if (chute === valor) {
    res.innerHTML = "Parabéns, você acertou!";
    tentativasRestantes = 0;
  } else {
    if (tentativasRestantes >= 0) {
      res.innerHTML = "Que pena, você errou, tente novamente";
      tentativasRestantes--;
    } else {
      res.innerHTML = `Que pena errou novamente, o número era ${valor}`;
    }
  }
}
