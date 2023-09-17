const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Obtém o nome informado e retira espaços em branco do início e final da string.
  const nome = frm.inNome.value.trim();

  if (!nome.includes(" ")) {
    alert("Informe o nome completo...");
    return;
  }
  const priEspaco = nome.indexOf(" ");
  const ultEspaco = nome.lastIndexOf(" ");
  //copia nome e sobrenome usando os parâmetros do substr()
  const cracha = nome.substr(0, priEspaco) + nome.substr(ultEspaco);

  resp.innerText = `Crácha: ${cracha}`;
});

//Com o uso do método indexOf(), indentificamos a posição do primeiro espaço do nome do participante.

//Ja o lasIndexOf() é utilizado para obter a posição do último espaço. Em seguida a variável cracha recebe duas substrings.

//A primeira da posição inicial do nome, com a quantidade de caracteres e a segunda com a posição do último espaço.
