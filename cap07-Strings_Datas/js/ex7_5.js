const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const funcionario = frm.inFuncionario.value;

  //Divide o nome em itens de vetor, criados a cada ocorrencia do espaço
  const partes = funcionario.split(" ");
  let email = ""; //Vai concatenar letras

  const tamanho = partes.length; //Obtém o número de itens do vetor partes

  //Percorre itens do vetor (exeto o último)
  for (let i = 0; i < tamanho - 1; i++) {
    email += partes[i].charAt(0); // Obtém a letra inicial de cada item
  }

  // Concatena as letras iniciais com a última parte (sobrenome) e empresa
  email += partes[tamanho - 1] + "@empresa.com.br";

  resp.innerText = `Email: ${email.toLocaleLowerCase()}`;
});

/* O programa obtém o nome do funcionario e divide-o em elementos de vetor
a partir da ocorrência do espaço. Dessa forma, o nome "Carlos Silva Lima",
passa a ocupar tês posições em um vetor. Em sequida, a repetição criada com 
o comando for vai percorrer os elementos do vetor, exeto o último (por isso, o
for repete enquanto i < tamanho - 1). E, dentro da repetição, obtém-se a primeira
letra de cada uma dessas partes. Ao final, concatena-se ao email a última parte do
nome, ou seja, o sobrenome e o nome da pessoa*/
