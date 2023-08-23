const frm = document.querySelector("form");
const resp1 = document.getElementById("simOunao");
const resp2 = document.getElementById("hehe");

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const ladoA = Number(frm.inLadoA.value);
  const ladoB = Number(frm.inLadoB.value);
  const ladoC = Number(frm.inLadoC.value);

  if(ladoA >= ladoB + ladoC || ladoB >= ladoA + ladoC || ladoC >= ladoA + ladoB){
    resp1.innerHTML = "Lados não podem formar um triângulo";
  } else {
    resp1.innerHTML = "Lados podem formar um triângulo";

    if (ladoA === ladoB && ladoA === ladoC){
      resp2.innerHTML = `Tipo: Equilátero`;
    } else if(ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
      resp2.innerHTML = `Tipo: Isóceles`;
    } else {
      resp2.innerHTML = `Tipo: Escaleno`;
    }
  }
})
