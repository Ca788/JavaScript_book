const prompt = require("prompt-sync")();
const valor = Number(prompt("Valor da compra R$: "));
const aux = Math.floor(valor / 20);

let parcelas
if (aux == 0) {
  parcelas = 1
} else if (aux > 6) {
  parcelas = 6
}else{
  parcelas = aux
}

const valorParcela = valor / parcelas

console.log(`Pode pagar em ${parcelas}x de R$: ${valorParcela.toFixed(2)}`)