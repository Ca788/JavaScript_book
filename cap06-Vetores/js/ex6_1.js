const frm = document.querySelector("form");
const respNome = document.querySelector("span");
const respLista = document.querySelector("pre");

const pacientes = []; // declara vetor global

// Ouve o evento de envio do formulário
frm.addEventListener("submit", (e) => {
  e.preventDefault(); // Impede o comportamento padrão de recarregar a página
  const nome = frm.inPaciente.value; // Obtém o valor do campo de entrada do paciente

  pacientes.push(nome); // Adiciona o nome do paciente ao final do vetor de pacientes

  let lista = "";

  // Percorre o vetor de pacientes e gera a lista formatada
  for (let i = 0; i < pacientes.length; i++) {
    lista += ` ${i + 1}. ${pacientes[i]}\n `;
  }
  respLista.innerText = lista; // Exibe a lista de pacientes no elemento 'respLista'
  frm.inPaciente.value = ""; // Limpa o conteúdo do campo de formulário
  frm.inPaciente.focus(); // Posiciona o cursor no campo de entrada
});

// Ouve o evento de clique no botão de urgência
frm.btUrgencia.addEventListener("click", () => {
  if (!frm.checkValidity()) {
    alert("Informe o nome do paciente a ser atendido em caráter de urgência");
    frm.inPaciente.focus();
    return;
  }

  const nome = frm.inPaciente.value; // Obtém o valor do campo de entrada do paciente
  pacientes.unshift(nome); // Adiciona o nome do paciente no início do vetor de pacientes
  let lista = "";

  // Percorre o vetor de pacientes e gera a lista formatada
  pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`));
  respLista.innerText = lista; // Exibe a lista de pacientes no elemento 'respLista'
  frm.inPaciente.value = ""; // Limpa o conteúdo do campo de formulário
  frm.inPaciente.focus(); // Posiciona o cursor no campo de entrada
});

// Ouve o evento de clique no botão de atender
frm.btAtender.addEventListener("click", () => {
  if (pacientes.length == 0) {
    alert("Não há pacientes na lista de espera");
    frm.inPaciente.focus();
    return;
  }
  const atender = pacientes.shift(); // Remove o primeiro paciente da lista
  respNome.innerText = atender; // Exibe o nome do paciente a ser atendido
  let lista = "";
  // Percorre o vetor de pacientes e gera a lista formatada
  pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`));

  respLista.innerText = lista; // Exibe a lista de pacientes no elemento 'respLista'
});
