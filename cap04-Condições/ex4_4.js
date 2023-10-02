const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const horaBrasil = Number(frm.inHoraBrasil.value);

    let horaFranca = horaBrasil + 5;

    if(horaFranca > 24) {
      horaFranca = horaFranca - 24
    }

    resp1.innerText = ` A hora na frança é ${horaFranca.toFixed(2)}`


  });