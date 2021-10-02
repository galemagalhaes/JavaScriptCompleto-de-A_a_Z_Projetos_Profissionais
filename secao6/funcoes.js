/**declaração de função 
 * function nomeFuncao(param1, param2, param3){
 * bloco de código
 * retorno}
*/

function calculaMedia(nota1, nota2, nota3){
  let media = (nota1 + nota2 + nota3)/3;
  return media;
}
console.log(calculaMedia(7,8,9));

/**Expressão de função
 * variável nomeVariavel = function nomeFunction(parametro){
 * variávelLocal nomeVariavelLocal = calculo;
 * retorno;}
*/

const areaQuadrado = function calcularArea(lado){
  let area = lado * lado;
  return area;
}
console.log(areaQuadrado(6));

//simplificação - ARROW FUNCTIONS
const areaQuadrado2 = (lado) => {
  let area = lado * lado;
  return area;
}
console.log(areaQuadrado2(7));

//mais simples
const areaQuadrado3 = lado => {
  return lado * lado;
}
console.log(areaQuadrado3(8));

//mais simples ainda
const areaQuadrado4 = lado => lado * lado;
console.log(areaQuadrado4(9));
