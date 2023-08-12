// Seleciona o elemento HTML 'form' usando o seletor de consulta
const frm = document.querySelector("form");

// Seleciona os elementos HTML usando os seletores de consulta com IDs
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

// Adiciona um ouvinte de evento para o evento de envio ('submit') do formulário
frm.addEventListener("submit", (e) => {
  // Previne o comportamento padrão de envio do formulário, que recarregaria a página
  e.preventDefault();

  // Obtém o valor do campo de entrada com o nome 'inVeiculo' do formulário
  const veiculo = frm.inVeiculo.value;

  // Obtém o valor do campo de entrada com o nome 'inPreco' do formulário e converte para um número
  const preco = Number(frm.inPreco.value);

  // Calcula o valor à vista (50% do preço)
  const aVista = preco * 0.5;

  // Calcula o valor parcelado (50% do preço dividido por 12)
  const parcelado = aVista / 12;

  // Atualiza o conteúdo dos elementos HTML com os resultados calculados
  resp1.innerHTML = `Veículo: ${veiculo}`;
  resp2.innerHTML = `Valor à vista: ${aVista.toFixed(2)}`;
  resp3.innerHTML = `OU 12 vezes de ${parcelado.toFixed(2)}`;
});
