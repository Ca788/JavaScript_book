const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {

    const name = frm.inNome.value

    resp.innerText = `Olá ${name} 😁`

    e.preventDefault();

});