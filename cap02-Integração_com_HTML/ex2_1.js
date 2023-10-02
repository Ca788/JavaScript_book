// Seleciona o elemento HTML 'form' usando o seletor de consulta
const frm = document.querySelector("form");

// Seleciona o elemento HTML 'h3' usando o seletor de consulta
const resp = document.querySelector("h3");

// Adiciona um ouvinte de evento para o evento de envio ('submit') do formulário
frm.addEventListener("submit", (e) => {
  // Previne o comportamento padrão de envio do formulário, que recarregaria a página
  e.preventDefault();

  // Obtém o valor do campo de entrada com o nome 'inNome' do formulário
  const name = frm.inNome.value;

  // Atualiza o texto do elemento 'h3' com uma saudação personalizada
  resp.innerText = `Olá ${name} 😁`;
});
