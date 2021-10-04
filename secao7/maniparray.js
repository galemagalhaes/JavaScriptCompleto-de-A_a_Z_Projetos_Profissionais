//metodos de arrays 

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