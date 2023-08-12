// Seleciona o elemento HTML 'form' usando o seletor de consulta
const frm = document.querySelector("form");

// Seleciona o elemento HTML 'h3' usando o seletor de consulta
const resp = document.querySelector("h3");

// Adiciona um ouvinte de evento para o evento de envio ('submit') do formulário
frm.addEventListener("submit", (e) => {
  // Previne o comportamento padrão de envio do formulário, que recarregaria a página
  e.preventDefault();

  // Obtém o valor do campo de entrada com o nome 'inQuilo' do formulário e converte para um número
  const quilo = Number(frm.inQuilo.value);

  // Obtém o valor do campo de entrada com o nome 'inConsumo' do formulário e converte para um número
  const consumo = Number(frm.inConsumo.value);

  // Calcula o valor a pagar multiplicando o consumo (em quilowatt-hora) pelo preço por quilowatt-hora
  const preco = (quilo / 1000) * consumo;

  // Atualiza o texto do elemento 'h3' com o valor a pagar formatado com duas casas decimais
  resp.innerText = `Valor a pagar: R$ ${preco.toFixed(2)}`;
});
