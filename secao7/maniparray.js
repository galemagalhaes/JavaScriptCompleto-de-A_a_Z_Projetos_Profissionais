/* //metodos de arrays 

//MAP()
const numeros = [10, 20, 30, 40, 50];
const novosNumeros = numeros.map((numeros) => numeros + 10);
console.log(novosNumeros);

//FILTER()
const numerosFilter = [1,4,9,16];
const impares = numeros.filter((numeros) => numeros % 2 === 1);
console.log(impares);

//FIND verifica todos os elementos do array e retorna o primeiro que atenda a condição
const numerosFind = [10,15,25,55,40];
let numeroRetornado = numerosFind.find((numerosFind) => numerosFind > 25);
console.log(numeroRetornado);
let numeroRetornado2 = numerosFind.findIndex((numerosFind) => numerosFind > 25);
console.log(numeroRetornado2);

//MATH, RANDOM E FLOOR
const nomes = ["Manuel", "Edval", "Bruno", "José", "Caio", "Pedro"];
let indiceAleatorio = Math.floor(Math.random() * 6);
console.log(nomes[indiceAleatorio]);

//percorrer arrays usando FOR
let frutas = ["maçã", "abacaxi", "laranja", "maracujá", "morango", "figo"];

//1 - FOR tradicional
for(let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

//FOR IN
for(let indice in frutas){
  console.log(frutas[indice]);
}

//FOR OF
for(let fruta of frutas){
  console.log(fruta);
}

//FOREACH
frutas.forEach((fruta, indice) => {
  console.log(fruta);
  console.log("Fruta " + indice + ": " + fruta);
}); */

//ARRAYS BIDIMENSIONAIS
const clientes = [["Manuel", 24, true], ["Edval", 24, false], ["Raphael", 19, true]];
console.table(clientes);
console.log(clientes[1][0]);
console.log(clientes[1][1]);
clientes.push(["Bruno", 27, false]);
console.table(clientes);

//Percorrendo Arrays multidimensionais
const quadroDeFuncionarios = [["Financeiro", "Kilma", "Danilo"], ["Marketing", "Sarah", "Letícia"], ["Diretoria", "Keila", "Marcos"]];
quadroDeFuncionarios.forEach((departamento, indiceDep) => {
  departamento.forEach((funcionario, indiceDep) => {
    console.log(`${indiceDep + 1} - ${funcionario}`);
  });
});