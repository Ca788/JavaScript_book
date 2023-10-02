const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const frase = frm.inFrase.value.toUpperCase();

  if (frase.indexOf("") == -1) {
    alert("Informe uma frase");
    frm.inFrase.focus();
    return;
  }

  const frase2 = frase.replace(/ /g, " ");
  const tam = frase2.length;

  let iguais = true;

  for (let i = 0; i < tam / 2; i++) {
    if (frase2[i] != frase2[tam - 1 - i]) {
      iguais = false;
      break;
    }
  }

  if (iguais) {
    resp.innerText = `${frase} é um Palíndromo`;
  } else {
    resp.innerText = `${frase} não um Palíndromo`;
  }
});

/* 
const frase2 = frase.replace(/ /g, " ");
: Esta linha está substituindo todos os espaços em branco na frase original (frase) por espaços em branco simples. A razão para isso provavelmente é eliminar espaços em branco da frase antes de verificar se é um palíndromo, tornando a comparação insensível a espaços.

const tam = frase2.length;
: Aqui, a variável tam está sendo definida com o comprimento da string após a substituição dos espaços em branco. Isso será usado para iterar pela metade da string para verificar se é um palíndromo.

let iguais = true;
: Uma variável booleana iguais é inicializada como verdadeira. Esta variável será usada para rastrear se todos os caracteres correspondentes da primeira metade e da segunda metade da string são iguais.

O código utiliza um loop for para percorrer a primeira metade da string frase2 (armazenada em frase2). O loop é executado até i ser menor do que a metade do comprimento da string (tam / 2).

Dentro do loop, há uma condição if que verifica se o caractere na posição i da primeira metade da string (frase2[i]) é diferente do caractere na posição correspondente na segunda metade da string (frase2[tam - 1 - i]). Se esses caracteres forem diferentes, a variável iguais é definida como false e o loop é interrompido usando break.

Após o loop, há uma verificação final. Se a variável iguais permanecer como true, isso significa que todas as letras na primeira metade da string são iguais às letras correspondentes na segunda metade, o que significa que a frase é um palíndromo. Nesse caso, a frase é exibida como um palíndromo no elemento com o ID resp. Caso contrário, a frase não é um palíndromo.

*/
