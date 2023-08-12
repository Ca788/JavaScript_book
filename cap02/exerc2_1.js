// Seleciona o elemento HTML 'form' usando o seletor de consulta
const frm = document.querySelector("form");

// Seleciona os elementos HTML 'h3' e 'h4' usando o seletor de consulta
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

// Adiciona um ouvinte de evento para o evento de envio ('submit') do formulário
frm.addEventListener("submit", (e) => {
  // Previne o comportamento padrão de envio do formulário, que recarregaria a página
  e.preventDefault();

  // Obtém o valor do campo de entrada com o nome 'inMedicamento' do formulário
  const medicamento = frm.inMedicamento.value;

  // Obtém o valor do campo de entrada com o nome 'inPreco' do formulário e converte para um número
  const preco = Number(frm.inPreco.value);

  // Calcula o valor promocional para levar 2 unidades do medicamento (preço unitário * 2)
  const valor = preco * 2;

  // Atualiza o texto do elemento 'h3' com a mensagem da promoção
  resp1.innerText = `Promoção de ${medicamento}`;

  // Atualiza o texto do elemento 'h4' com o valor promocional formatado com duas casas decimais
  resp2.innerText = `Leve 2 por apenas R$ ${valor.toFixed(2)}`;
});
