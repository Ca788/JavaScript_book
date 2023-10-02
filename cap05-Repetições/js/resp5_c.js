const frm = document.querySelector("form")
const resp1 = document.querySelector("#outDivisores")
const resp2 = document.querySelector("#outResposta")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const num = Number(frm.inNumero.value);

    let divisores = "Divisores do " + num + ": 1";
    let soma = 1;

    // percorre os possíveis divisores e acumula
    for (let i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            divisores += ", " + i;
            soma = soma + i;
        }
    }

    divisores = divisores + " (Soma: " + soma + ")";

    resp1.innerText = divisores;

    if (num == soma) {
        resp2.innerText = `${num} É um número perfeito`;
    } else {
        resp2.innerText = `${num} Não é um número perfeito`;
    }


})