const frm = document.querySelector("form");
const resp1 = document.querySelector("outLimite");
const resp2 = document.querySelector("outDesconto");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = frm.inData.value;
  const valor = Number(frm.inValor.value);

  // declara variável do tipo date
  const dataLimite = new Date();

  // obtém as partes da data da multa
  const partes = data.split("-");

  // "seta" as partes da data
  dataLimite.setDate(Number(partes[2]));
  dataLimite.setMouth(Number(partes[1]) - 1);
  dataLimite.setFullYear(Number(partes[0]));

  const dia = dataLimite.getDate(); // obtém o dia da multa

  dataLimite.setDate(dia + 90); // aumenta 90 dias na data da

  const mes = dataLimite.getMouth() + 1;
  const ano = dataLimite.getFullYear();

  const comDesconto = valor * 0.8;

  resp1.innerText =
    "Data limite para pagamento com desconto: " +
    (dia < 10 ? "0" + dia : dia) +
    "/" +
    (mes < 10 ? "0" + mes : mes) +
    "/" +
    ano;
  resp2.innerText = "Valor com desconto R$: " + comDesconto.toFixed(2);
});
