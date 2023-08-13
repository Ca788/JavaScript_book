const frm = document.querySelector("form");
const resp = document.querySelector("pre");
const resp2 = document.querySelector("#outOrdem");

const numbers = [];

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const numero = Number(frm.inNumero.value);

  numbers.push(numero);

  frm.btOrdem.dispatchEvent(new Event("click"));

  frm.inNumero.value = "";
  frm.inNumero.focus();

  let lista = " ";
  for (const number of numbers) {
    lista += number;
  }
  resp.innerText = "Numeros: " + lista;
});

frm.btOrdem.addEventListener("click", () => {
  if (numbers.length == 0) {
    alert("Não há números na lista");
    inNumero.focus();
    return;
  }

  let ordem = true;
  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] > numbers[i + 1]) {
      ordem = false;
      break;
    }
  }

  resp.innerText = ordem
    ? "Ok! Números estão em ordem crescente"
    : "Atenção... Números não estão em ordem crescente";
});
