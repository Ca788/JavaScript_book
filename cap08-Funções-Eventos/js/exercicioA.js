const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = frm.inNome.value;
  const idade = Number(frm.inIdade.value);

  const sublinhado = gerarTracos(nome);
  const categoria = verCategoria(idade);

  resp1.innerText = nome + "\n" + sublinhado + "\nCategoria: " + categoria;
});

const gerarTracos = (nome) => {
  let tracos = "";

  for (const letra in nome) {
    if (letra != " ") {
      tracos += "-";
    } else {
      tracos += " ";
    }
  }

  return tracos;
};

const verCategoria = (idade) => {
  let cat;
  if (idade <= 12) {
    cat = "Infantil";
  } else if (idade <= 18) {
    cat = "Juvenil";
  } else {
    cat = "Adulto";
  }
  return cat;
};
