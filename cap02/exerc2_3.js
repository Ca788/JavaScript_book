const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

frm.addEventListener("submit", (e) => {

   const produto = frm.inProduto.value
   const preco = Number(frm.inPreco.value)

   const valor1 = preco / 2
   const valor2 = (preco * 2) + valor1
   
   resp1.innerText = `${produto} - Promoção: Leve 3 por R$ ${valor2.toFixed(2)}` 
   resp2.innerText = `O 3° produto custa apenas R$ ${valor1.toFixed(2)}`

   e.preventDefault()

});