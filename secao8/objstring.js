
//"não tloco as letlas de ploposito"

function falaCebolinha(frase){
  let fraseCebolinha = "";
  for(let letra of frase){
    if(letra === "r"){
      fraseCebolinha += "l";
    } else {
      fraseCebolinha += letra;
    }
  }
  return fraseCebolinha;
}
console.log(falaCebolinha("não troco as letras de propósito"));
console.log(falaCebolinha("vamos tomar sorvete"));