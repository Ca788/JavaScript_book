const prompt = require("prompt-sync")()
const produto = ("Produto: ")
const num = Number(prompt("N de Etiquetas: "))

for (let i = 1; i <= num / 2; i++) {
    console.log(`${produto.padEnd(30)} ${produto.padEnd(30)} `)
}
if (num % 2 == 1) {
    console.log(produto)
}