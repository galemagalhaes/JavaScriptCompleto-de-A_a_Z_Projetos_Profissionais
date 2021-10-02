/*Melhorias feitas sobre o código inicial do banco, agora usando funções para 
tornar mais fácil a reutiização do código */

let nome;
let sobrenome;
let idade;
let valorEmprestimo;
let taxaDeJuros;
let numAnos;
let ehBomPagador;

function cadastrarCliente(nomeCliente, sobrenomeCliente, idadeCliente, valorEmprestimoCliente, //parametros normais
    numAnosCliente = 2, ehBomPagadorCliente = false) {   //parametros default
      nome = nomeCliente;
      sobrenome = sobrenomeCliente;
      idade = idadeCliente;
      valorEmprestimo = valorEmprestimoCliente;
      numAnos = numAnosCliente;
      ehBomPagador = ehBomPagadorCliente;
      taxaDeJuros = defineTaxa(idadeCliente);
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

cadastrarCliente("Edval", "Silveira", 56, 150000, 9, false);
console.log(nome);
console.log(sobrenome);
console.log(numAnos);
console.log(ehBomPagador);
//console.log(saudacao);   a variável está inacessível por ser de ESCOPO LOCAL