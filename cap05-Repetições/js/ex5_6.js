const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const num = Number(frm.inNumero.value);

    let temDivisor = 0 //declara e inicializa contador

    for (let i = 2; i <= num / 2; i++) { // Percorre todos os possíveis divisores de num 
        if (num % i == 0) { // se tem divisor
            temDivisor = 1 // muda o flag 
            break // sai da repetição     

        }
    }

    if (num > 1 && !temDivisor) {
        resp.innerText = `${num} é primo`
    } else {
        resp.innerText = `${num} não é primo`
    }

})