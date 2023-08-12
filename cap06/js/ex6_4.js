// Seleciona o formulário e o campo de resposta no HTML
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

// Cria um vetor vazio para armazenar os dados das crianças
const criancas = [];

// Event listener para o evento de envio do formulário
frm.addEventListener("submit", (e) => {
  e.preventDefault(); // Evita o envio do formulário, pois o código tratará os dados manualmente

  // Obtém o nome e a idade digitados no formulário
  const nome = frm.inNome.value;
  const idade = Number(frm.inIdade.value);

  // Adiciona os dados da criança ao vetor de objetos "criancas"
  criancas.push({ nome, idade });

  // Limpa os campos do formulário após o envio
  frm.reset();

  // Posiciona o foco no campo do nome do formulário
  frm.inNome.focus();

  // Dispara o clique no botão de listar para mostrar a lista atualizada das crianças
  frm.btListar.dispatchEvent(new Event("click"));
});

// Event listener para o botão de listar
frm.btListar.addEventListener("click", (e) => {
  // Verifica se o vetor de crianças está vazio
  if (criancas.length == 0) {
    alert("Não há crianças na lista");
    return;
  }

  let lista = "";
  // Percorre o vetor de crianças e monta a lista de nomes e idades formatada
  for (const crianca of criancas) {
    const { nome, idade } = crianca; // Desestrutura o objeto para obter nome e idade
    lista += nome + " " + idade + " anos\n"; // Concatena nome e idade da criança à lista
  }
  resp.innerText = lista; // Exibe a lista de nomes e idades no elemento "pre" do HTML
});

// Event listener para o botão de resumir
frm.btResumir.addEventListener("click", (e) => {
  if (criancas.length == 0) {
    alert("Não há crianças na lista");
    return;
  }

  // Cria uma cópia do vetor "criancas" para preservar a ordem original dos dados
  const copia = [...criancas];

  // Ordena a cópia das crianças pelo campo "idade", em ordem crescente
  copia.sort((a, b) => a.idade - b.idade);

  let resumo = ""; // Variável para concatenar a saída resumida

  let aux = copia[0].idade; // Variável para guardar a menor idade do vetor ordenado
  let nomes = []; // Vetor para armazenar os nomes de crianças com a mesma idade

  // Percorre a cópia ordenada das crianças
  for (const crianca of copia) {
    const { nome, idade } = crianca;
    if (idade == aux) {
      // Se a idade da criança for igual à idade atual (auxiliar), adiciona o nome ao vetor de nomes
      nomes.push(nome);
    } else {
      // Se a idade for diferente da idade atual (auxiliar), monta a string de resumo para a idade anterior
      resumo += aux + " anos(s): " + nomes.length + " criança(s): ";
      resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n";
      resumo += "(" + nomes.join(", ") + ")\n\n";

      // Atualiza a idade atual (auxiliar) e reinicia o vetor de nomes para a nova idade
      aux = idade;
      nomes = [nome];
    }
  }

  // Adiciona a última idade e seus respectivos nomes ao resumo
  resumo += aux + " anos(s): " + nomes.length + " criança(s): ";
  resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n";
  resumo += "(" + nomes.join(", ") + ")\n\n";

  // Exibe a resposta resumida no elemento "pre" do HTML
  resp.innerText = resumo;
});
