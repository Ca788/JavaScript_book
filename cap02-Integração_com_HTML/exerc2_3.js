// Seleciona o elemento HTML 'form' usando o seletor de consulta
const frm = document.querySelector("form");

// Seleciona os elementos HTML 'h3' e 'h4' usando o seletor de consulta
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

// Adiciona um ouvinte de evento para o evento de envio ('submit') do formulário
frm.addEventListener("submit", (e) => {
  // Previne o comportamento padrão de envio do formulário, que recarregaria a página
  e.preventDefault();

  // Obtém o valor do campo de entrada com o nome 'inProduto' do formulário
  const produto = frm.inProduto.value;

  // Obtém o valor do campo de entrada com o nome 'inPreco' do formulário e converte para um número
  const preco = Number(frm.inPreco.value);

  // Calcula o valor de uma unidade do produto na promoção "Leve 3"
  const valor1 = preco / 2;

  // Calcula o valor total para comprar 3 unidades do produto com o desconto
  const valor2 = preco * 2 + valor1;

  // Atualiza o texto do elemento 'h3' com a mensagem da promoção e o valor total para 3 unidades
  resp1.innerText = `${produto} - Promoção: Leve 3 por R$ ${valor2.toFixed(2)}`;

  // Atualiza o texto do elemento 'h4' com o preço do terceiro produto (valor com desconto)
  resp2.innerText = `O 3° produto custa apenas R$ ${valor1.toFixed(2)}`;
});
