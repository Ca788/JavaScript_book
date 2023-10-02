const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const mensagem = frm.inMensagem.value;

  let resposta = "";
  const tam = mensagem.length;

  for (let i = 1; i < tam; i = i + 2) {
    resposta += mensagem.charAt(i);
  }

  for (let i = 0; i < tam; i = i + 2) {
    resposta += mensagem.charAt(i);
  }

  resp.innerText = resposta;
});
