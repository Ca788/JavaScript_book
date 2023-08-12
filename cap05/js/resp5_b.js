const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const chin = Number(frm.inChin.value)
    const anos = Number(frm.inAnos.value)

    let resposta = ""
    let total = chin

    for (let i = 1; i <= anos; i++) {
        resposta = resposta + i + "° Ano: " + total + " Chinchilas\n";

        total = total * 3
    }
    resp.innerText = resposta
})