// Seleciona o formulário e o elemento <pre> (usado para exibir a lista ou os jogos)
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

// Cria um array vazio chamado "tabela" para armazenar os nomes dos clubes
const tabela = [];

// Adiciona um evento de submissão ao formulário
frm.addEventListener("submit", (e) => {
  e.preventDefault(); // Impede o comportamento padrão do formulário (não recarrega a página)

  // Obtém o valor do campo de entrada chamado "inClube" no formulário
  const clubes = frm.inClube.value;

  // Adiciona o nome do clube ao array "tabela"
  tabela.push(clubes);

  // Dispara um evento "click" no botão de listar (btListar) para atualizar a lista exibida
  frm.btListar.dispatchEvent(new Event("click"));

  // Limpa o campo de entrada e foca nele
  frm.inClube.value = "";
  frm.inClube.focus();
});

// Adiciona um evento de clique ao botão de listar
frm.btListar.addEventListener("click", () => {
  // Verifica se a lista está vazia
  if (tabela.length == 0) {
    alert("Não há clubes na lista");
    inClube.focus(); // Foca no campo de entrada
    return;
  }

  let lista = "";

  // Cria uma string com os nomes dos clubes separados por quebra de linha
  for (const clubes of tabela) {
    lista += clubes + "\n";
  }

  // Exibe a lista no elemento <pre>
  resp.innerText = lista;
});

// Adiciona um evento de clique ao botão de criar jogos em pares
frm.btTabela.addEventListener("click", () => {
  const tam = tabela.length;

  // Verifica se há um número par de clubes na lista
  if (tam == 0 || tam % 2 == 1) {
    alert("Deve haver tabelas em pares");
    inClubes.focus(); // Foca no campo de entrada (presumivelmente o nome do clube)
    return;
  }

  let jogos = "";

  const ultimo = tam - 1;

  // Cria pares de clubes para jogos, combinando o primeiro com o último, o segundo com o penúltimo, etc.
  for (i = 0; i < tam / 2; i++) {
    jogos += tabela[i] + " x " + tabela[ultimo - i] + "\n";
  }

  // Exibe os jogos em pares no elemento <pre>
  resp.innerText = jogos;
});
