const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {

  const time15 = Number(frm.inValor.value)
  const timeUso = Number(frm.inTempo.value)

  //Calcula o valor e arrondonda para cima usando (math.ceil)
  const valor = Math.ceil(timeUso / 10) * time15

  resp.innerText = ` Valor a pagar ${valor.toFixed(2)}`

  e.preventDefault()

}); 