/*Sistema de cadastro de clientes */

let nome = "Manuel";
let sobrenome = "Silva";
let idade = 57;
const numClient = 095864;
let valorEmprestimo = 150000;
let taxaDeJuros;
let numAnos = 6;
ehBomPagador = false;

if(ehBomPagador){
  console.log("O cliente " + nome + " é um bom pagador.");
} else {
  console.log("O cliente " + nome + " não é um bom pagador.")
}

if(idade >= 18 && idade <= 25){
  taxaDeJuros = 0.09;
} else if(idade >= 26 && idade <= 35){
  taxaDeJuros = 0.08;
} else if(idade >=36 && idade <= 50){
  taxaDeJuros = 0.07;
} else {
  taxaDeJuros = 0.06;
} 
console.log(taxaDeJuros);

let juros = valorEmprestimo * numAnos * taxaDeJuros; 
let montante = valorEmprestimo + juros;
console.log("Valor do montante é: " + montante);

//operador ternário
console.log("O cliente " + nome + (ehBomPagador ? " é bom pagador." : " não é bom pagador."));

for(let cont = 0; cont < 3; cont++){
  valorEmprestimo = parseInt(prompt("Digite o valor do emprestimo."));
  numAnos = parseInt(prompt("Digite o numero de anos"));
  juros = valorEmprestimo * numAnos * taxaDeJuros; 
  montante = valorEmprestimo + juros;
  console.log("Valor do montante é: " + montante);
}

/*while(valorEmprestimo !=0){
  valorEmprestimo = parseInt(prompt("Insira o valor do emprestimo"));
  numAnos = parseInt(prompt("Insira o numero de anos"));
  juros = valorEmprestimo * numAnos * taxaDeJuros; 
  montante = valorEmprestimo + juros;
  console.log("Valor do montante é: " + montante);
}*/