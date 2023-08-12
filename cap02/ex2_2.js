// Seleciona o elemento HTML 'form' usando o seletor de consulta
const frm = document.querySelector("form");

// Seleciona o elemento HTML 'h3' usando o seletor de consulta
const resp1 = document.querySelector("h3");

// Seleciona o elemento HTML 'h4' usando o seletor de consulta
const resp2 = document.querySelector("h4");

// Adiciona um ouvinte de evento para o evento de envio ('submit') do formulário
frm.addEventListener("submit", (e) => {
  // Previne o comportamento padrão de envio do formulário, que recarregaria a página
  e.preventDefault();

  // Obtém o valor do campo de entrada com o nome 'inTitulo' do formulário
  const titulo = frm.inTitulo.value;

  // Obtém o valor do campo de entrada com o nome 'inDuracao' do formulário e converte para um número
  const duracao = Number(frm.inDuracao.value);

  // Calcula a quantidade de horas e minutos a partir da duração em minutos
  const horas = Math.floor(duracao / 60);
  const minutos = duracao % 60;

  // Atualiza o texto do elemento 'h3' com o título inserido
  resp1.innerText = titulo;

  // Atualiza o texto do elemento 'h4' com a duração em horas e minutos
  resp2.innerText = `${horas} hora(s) e ${minutos} minuto(s)`;
});
