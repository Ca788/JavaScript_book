const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");

frm.addEventListener("submit", (e) =>{

   const numero = Number(frm.inNumero.value);

   const raiz = Math.sqrt(numero)

   if (Number.isInteger(raiz)){
     resp1.innerText = `Raiz: ${raiz}`
   } else {
     resp1.innerText = ` Não há raiz para o número ${numero}`
   }

   e.preventDefault()

});