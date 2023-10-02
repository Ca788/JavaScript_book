const prompt = require("prompt-sync")(); //Pacote para entrada de dados
const formula = prompt("Fórmula: "); //Lê a fórmula

let abre = 0;
let fecha = 0;

for (const simbolo of formula) {
  if (simbolo == "(") {
    abre++;
  } else if (simbolo == ")") {
    fecha++;
  }

  if (fecha > abre) {
    break;
  }
}

if (abre == fecha) {
  console.log("Ok! Fórmula correta (em relação aos parênteses)");
} else {
  console.log("Erro... Fórmula incorreta");
}
