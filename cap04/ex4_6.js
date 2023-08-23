const frm = document.querySelector("form");
const resp1 = document.getElementById("outResp1");
const resp2 = document.getElementById("outResp2");
const resp3 = document.getElementById("outResp3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const saque = Number(frm.inSaque.value);

  if (saque % 10 !== 0) {
    alert(`Valor inválido para R$10, R$50, R$100`);
    frm.inSaque.focus();
    return;
  }

  const notasCem = Math.floor(saque / 100);
  const restoCem = saque % 100;

  const notasCinquenta = Math.floor(restoCem / 50);
  const restoCinquenta = restoCem % 50;

  const notasDez = Math.floor(restoCinquenta / 10);

  if (notasCem > 0) {
    resp1.innerText = `R$100: ${notasCem}`;
  } else {
    ("");
  }

  if (notasCinquenta > 0) {
    resp2.innerText = `R$50: ${notasCinquenta}`;
  } else {
    ("");
  }

  if (notasDez > 0) {
    resp3.innerText = `R$10: ${notasDez}`;
  } else {
    ("");
  }
});
