const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

frm.addEventListener("submit", (e) => {

  const veiculo = frm.inVeiculo.value
  const preco = Number(frm.inPreco.value)

  const aVista = preco * 0.50
  const parcelado = (preco * 0.50) / 12

  resp1.innerHTML = `Veiculo: ${veiculo}`
  resp2.innerHTML = `Valor à vista: ${aVista.toFixed(2)}`
  resp3.innerHTML = `OU 12 vezes de ${parcelado.toFixed(2)}`

  e.preventDefault()

});