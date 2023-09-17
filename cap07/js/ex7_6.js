const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const senha = frm.inSenha.value;
  const erros = []; // Vetor de erros

  //Verifica se o tamanho é válido
  if (senha.length < 8 || senha.length > 15) {
    erros.push("Senha deve possuir entre 8 a 15 caracteres");
  }

  //Verifica se não possui números
  if (senha.match(/[0-9]/g) == null) {
    erros.push("Possuir números (mínimo, 1)");
  }

  //Verifica se não possui letras maiúsculas
  if (!senha.match(/[a-z]/g)) {
    erros.push("Possuir letras minúsculas (mínimo, 1)");
  }

  //Verifica se não possui letras minúsculas ou se possui apenas 1
  if (!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length == 1) {
    erros.push("Possuir letras maiúsculas (mínimo, 2)");
  }

  //Verfica se não possui simbolos ou "_"
  if (!senha.match(/[\W|_]/g)) {
    erros.push("Possuir símbolos (mínimo, 1)");
  }

  //Se vetor está vazio (significa que não foram encontrados os erros)
  if (erros.length == 0) {
    resp.innerText = "Ok! Senha Válida!";
  } else {
    resp.innerText = `Erro... A senha deve ${erros.join(", ")}`;
  }
});
