const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault()
  
  const velocidadePermitida = Number(frm.inVelocidadeP.value);

  const velocidadeCondutor = Number(frm.inVelocidadeC.value);

  if(velocidadeCondutor <= velocidadePermitida){
    resp.innerText = `Situação: Sem multa.`
  }else{
    const maisVinte = velocidadePermitida * 1.2
    if(velocidadeCondutor <= maisVinte ){
      resp.innerText = `Situação: Multa leve.`
    }else{
      resp.innerText = `Situação: Multa grave.`
    }
  }

});



