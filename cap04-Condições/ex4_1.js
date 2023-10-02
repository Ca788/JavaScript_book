const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

frm.addEventListener("submit", (e) => {

   e.preventDefault()

    const nome = frm.inNome.value;
    const nota1 = Number(frm.inNota1.value);
    const nota2 = Number(frm.inNota2.value);
    const nota3 = Number(frm.inNota3.value);
   

    const media = (nota1 + nota2 + nota3) / 3

    if(media >=7) {

      resp2.innerText = `Parabens ${nome} você foi aprovado sua média foi ${media.toFixed(2)}`
      resp2.style.color = "blue"
    } else if(media >= 4) {

      resp2.innerText = ` ${nome} Você está em exame ${media.toFixed(2)}`
      resp2.style.color = "green"
    } else {

      resp2.innerText = ` ${nome} Você está em recuperação com a média ${media.toFixed(2)}`
      resp2.style.color = "red"
    }

}); 