const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const itens = [];

  frm.rbPizza.addEventListener("click", () => {
    //Quando o radio button é clicado
    frm.inPizza.className = "oculta"; //Oculta select das pizzas
    frm.inBebida.className = "exibe"; //Exibe select das bebidas
  });

  frm.inDetalhes.addEventListener("focus", () => {
    if (frm.rbPizza.checked) {
      // Se radiobutton rbPizza estiver marcado
      const pizza = frm.rbPizza.value; //obtém o valor do item selecionado.
      // Uso do operador ternário, para indicar o número de sabores.
      const num = pizza == "media" ? 2 : pizza == "grande" ? 3 : 4;
      // Atributo placeholder exibe uma dica de preenchimento do campo.
      frm.inDetalhes.placeholder = `Até ${num} sabores`;
    }
  });

  frm.inDetalhes.addEventListener("blur", () => {
    //Quando o campo perde o foco
    frm.inDetalhes.placeholder = ""; //Limpa a dica de preenchimento
  });

  let produto;
  if (frm.rbPizza.checked) {
    const num = frm.inPizza.selectedIndex;
    produto = frm.inPizza.options[num].text;
  } else {
    const num = frm.inBebida.selectedIndex;
    produto = frm.inBebida.options[num].text;
  }
  const detalhes = frm.inBebida.value;
  itens.push(produto + " (" + detalhes + ")");
  resp.innerText = itens.join("\n");

  frm.reset();
  frm.rbPizza.dispatchEvent(new Event("click"));
});
