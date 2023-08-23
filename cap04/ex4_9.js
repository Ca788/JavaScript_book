const prompt = require("prompt-sync")()
const numero = Number(prompt("Número (centena): "));

if (numero < 100 || numero >= 1000) {
    console.log("Erro.. deve ser uma centena")
    return
}

const num1 = Math.floor(numero / 100); //Obtém o 1 número 
const sobra = numero % 100 //O que sobra dezena
const num2 = Math.floor(sobra / 10); //Obtém o 2 número
const num3 = sobra % 10 //Obtém o 3 número

console.log(`Invertido: ${num3}${num2}${num1}`)