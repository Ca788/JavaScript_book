/* Uma função em javaScript pode ser construida com a palavra reservada (funtion)
ou com uma declaração de constante - Usando a notação conhecida como arrow funtion
Observe a sintaxe das duas formas. */
function ola() {
  console.log("Olá seja muito bem vindo!");
}
ola();

const ola2 = () => {
  console.log("Olá seja muito bem vindo, novamente!");
};
ola2();

/* As vantanges da segunda forma estão relacionadas a proteção dada as consts
em javaScript e uma sintaxe mais curta - que não necessita de um return - em 
funções que podem ser construidas com uma única atribuição. Se, por exemplo,
executarmos um programa que contenha a declaração de duas functions com o mesmo
nome, o programa irá rodar, sem acusar erro. Caso isso aconteça a partir da declaração
de const, a linguagem alerta para um erro no código. */
