/**Faça um programa que receba 3 valores de tempo gasto referentes a cada corredor 
 * e exiba qual deles foi o vencedor.
 */

let tempCorredor1 = 10;
let tempCorredor2 = 10;
let tempCorredor3 = 10;

if(tempCorredor1 < tempCorredor2 && tempCorredor1 < tempCorredor3){
  console.log("O corredor 1 venceu!")
} else if(tempCorredor2 < tempCorredor1 && tempCorredor2 < tempCorredor3){
  console.log("O corredor 2 venceu!")
} else if(tempCorredor3 < tempCorredor1 && tempCorredor3 < tempCorredor2) {
  console.log("O corredor 3 venceu!")
} else {
  console.log("Houve empate.")
}