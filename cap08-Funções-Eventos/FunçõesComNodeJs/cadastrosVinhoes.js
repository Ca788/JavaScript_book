/*O programa explora o uso de funções para gerenciar um vetor
de objetos. Trata-se de um cadastro de vinhos*/

const prompt = require("prompt-sync")();

const vinhos = [];

function titulo(texto) {
  //recebe por parâmetro, o texto a ser exibido.
  console.log();
  console.log(texto);
  console.log("=".repeat(40));
}
//Programa principal
do {
  titulo("===< Cadastro de vinhos >===");
  console.log("1. Inclusão de vinhos");
  console.log("2. Listagem de vinhos");
  console.log("3. Pesquisar por tipo");
  console.log("4. Media e destaques");
  console.log("5. Finalizar");

  const opcao = Number(prompt("Opção: "));
  if (opcao == 1) {
    incluir();
  } else if (opcao == 2) {
    listar();
  } else if (opcao == 3) {
    pesquisar();
  } else if (opcao == 4) {
    calcularMedia();
  } else {
    break;
  }
} while (true);

function incluir() {
  titulo("===< Inclusão de vinhos >===");

  const marca = prompt("Marca...: ");
  const tipo = prompt("Tipo...: ");
  const preco = Number(prompt("Preco R$: "));

  vinhos.push({ marca, tipo, preco }); //Insere um objeto no vetor
  console.log("Ok! Vinho cadastrado com sucesso");
}

function listar() {
  titulo("===< Lista dos vinhos cadastrados >===");
  console.log("Marca............... Tipo............. Preco R$:");

  for (const vinho of vinhos) {
    console.log(
      `${vinho.marca.padEnd(20)} ${vinho.tipo.padEnd(20)}` +
        `${vinho.preco.toFixed(2).padStart(9)}`
    );
  }
}

function pesquisar() {
  titulo("===< Pesquisar por Tipo de vinhos >===");
  const pesq = prompt("Tipo: "); // Lê o tipo do vinho a pesquisar

  let contador = 0; // Contador para verificar se existe
  console.log("Marca............... Tipo............. Preco R$:");

  for (const vinho of vinhos) {
    if (vinho.tipo.toUpperCase().includes(pesq.toUpperCase())) {
      console.log(
        `${vinho.marca.padEnd(20)} ${vinho.tipo.padEnd(20)}` +
          `${vinho.preco.toFixed(2).padStart(9)}`
      );
      contador++; //Se entrou no if, incrementa o contador
    }
  }

  //Se percorreu todos os vinhos e contador continua = 0, significa que não há
  if (contador == 0) {
    console.log(`Obs.: Não há vinhos cadastrados do tipo "${tipo}"`);
  }
}
