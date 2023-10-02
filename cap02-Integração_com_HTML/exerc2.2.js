// Seleciona o elemento HTML 'form' usando o seletor de consulta
const frm = document.querySelector("form");

// Seleciona o elemento HTML 'h3' usando o seletor de consulta
const resp = document.querySelector("h3");

// Adiciona um ouvinte de evento para o evento de envio ('submit') do formulário
frm.addEventListener("submit", (e) => {
  // Previne o comportamento padrão de envio do formulário, que recarregaria a página
  e.preventDefault();

  // Obtém o valor do campo de entrada com o nome 'inValor' do formulário e converte para um número
  const time15 = Number(frm.inValor.value);

  // Obtém o valor do campo de entrada com o nome 'inTempo' do formulário e converte para um número
  const timeUso = Number(frm.inTempo.value);

  // Calcula o valor total com base no tempo de uso, arredondando para cima em incrementos de 10 minutos
  const valor = Math.ceil(timeUso / 10) * time15;

  // Atualiza o texto do elemento 'h3' com o valor a pagar formatado com duas casas decimais
  resp.innerText = `Valor a pagar: R$ ${valor.toFixed(2)}`;
});
