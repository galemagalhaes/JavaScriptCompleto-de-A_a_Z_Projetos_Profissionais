/*Melhorias feitas sobre o código inicial do banco, agora usando funções para 
tornar mais fácil a reutiização do código */

let nome;
let sobrenome;
let idade;
let valorEmprestimo;
let taxaDeJuros;
let numAnos;
let ehBomPagador;
let avalistas;

function cadastrarCliente(nomeCliente, sobrenomeCliente, idadeCliente, valorEmprestimoCliente, //parametros normais
     numAnosCliente = 2, ehBomPagadorCliente = false, avalistaCliente) {   //parametros default
      nome = nomeCliente;
      sobrenome = sobrenomeCliente;
      idade = idadeCliente;
      valorEmprestimo = valorEmprestimoCliente;
      numAnos = numAnosCliente;
      ehBomPagador = ehBomPagadorCliente;
      taxaDeJuros = defineTaxa(idadeCliente);
      avalistas = avalistaCliente;
}

function defineTaxa(idadeCliente){
    if(idade >= 18 && idade <= 25){
      return 0.09;
    } else if(idade >= 26 && idade <= 35){
      return 0.08;
    } else if(idade >=36 && idade <= 50){
      return 0.07;
    } else {
      return 0.06;
    } 
}
function sauda(){
  let saudacao = "Olá Sr. " + nome;
  return saudacao;
}

cadastrarCliente("Manuel", "Silva", 24, 150000);
console.log(nome);
console.log(sobrenome);
console.log(numAnos);
console.log(ehBomPagador);
console.log(sauda());  // a função é acessível por ser de ESCOPO GLOBAL

cadastrarCliente("Edval", "Silveira", 56, 150000, 9, false, ["Manuel", "Raphael", "Bruno"]);
console.log(nome);
console.log(avalistas);
console.log(avalistas[0]);
console.log(avalistas[1]);
//console.log(sobrenome);
//console.log(numAnos);
//console.log(ehBomPagador);
//console.log(saudacao);   a variável está inacessível por ser de ESCOPO LOCAL

function adicionaAvalista(avalista){
  avalistas.push(avalista);
}
function removeAvalista(){
  avalistas.pop();
}
function editaAvalista(nomeAvalista, indice){
  avalistas[indice] = nomeAvalista;
}
function ordenaAvalista(){
  return avalistas.sort();
}
function exibeAvalista(){
  avalistas.forEach((avalista, indice) => {
    console.log(`O ${indice + 1}º avalista é ${avalista}`);
  });
}

exibeAvalista();
adicionaAvalista("Andrew");
adicionaAvalista("José");
adicionaAvalista("Marcos");
console.log(avalistas);
removeAvalista();
removeAvalista();
console.log(avalistas);
editaAvalista("Manuel Silva", 0);
ordenaAvalista();
console.log(avalistas);
