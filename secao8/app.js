let nome;
let sobrenome;
let idade;
let valorEmprestimo;
let taxaDeJuros;
let numAnos;
let ehBomPagador;
let avalistas;

function cadastrarCliente(nomeCliente, sobrenomeCliente, idadeCliente, valorEmprestimoCliente, 
     numAnosCliente = 2, ehBomPagadorCliente = false, avalistaCliente) {   
        cliente = {
          nome: nomeCliente,
          sobrenome: sobrenomeCliente,
          idade: idadeCliente,
          emprestimo: {
            valorEmprestimo: valorEmprestimoCliente,
            numAnos: numAnosCliente,
            ehBomPagador: ehBomPagadorCliente,
            taxaDeJuros: defineTaxa(idadeCliente),
            avalistas: avalistaCliente
          }
        
      }
      return cliente;         
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

const cliente1 = cadastrarCliente("Edval", "Silveira", 56, 150000, 9, false, ["Manuel", "Raphael", "Bruno"]);
console.log(cliente1);

cliente.numeros = 1; // adiciona propriedade
delete cliente.numeros; // deleta/remove propriedade