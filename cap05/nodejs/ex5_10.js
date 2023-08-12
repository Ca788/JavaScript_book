const prompt = require("prompt-sync")()
const valor = Number(prompt("Valor R$: ")) //lê valor do canet
const num = Number(prompt("Número de parcelas: ")) // e número das parcelas
const valorPacelas = Math.floor(valor % num) // calcula valor sem decimais
const valorFinal = valorPacelas + (valor / num) //calcula parcela final 
for (let i = 1; i < num; i++) { // enquanto i < num  
    console.log(`${i} parcela: R$ ${valorPacelas.toFixed(2)} `)
}
console.log(`${num} parcela: R$ ${valorFinal.toFixed(2)} `)