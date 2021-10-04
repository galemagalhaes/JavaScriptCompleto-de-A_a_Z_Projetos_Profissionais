/**Sistema para apresentar um relatório contendo o numero de alunos de uma escola
 * que foram aprovados e reprovados de acordo com suas notas distribuídas em um
 * array
 */
function geraRelatorio(array){
  let contAprovados = 0;
  let contReprovados = 0;
  for(const nota of array){
    if(nota >= 7){
      contAprovados +=1;
    } else {
      contReprovados +=1;
    }
  }
  return `Aprovados: ${contAprovados}. Reprovados: ${contReprovados}`;
}
console.log(geraRelatorio([10,8,5,7,9,4,6]));