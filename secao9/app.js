
try{
  let nome = "Manuel";
  console.log(nome.toUpperCase());
}catch(erro){
  console.log(erro);
  console.log(erro.name);
  console.log(erro.message);
}finally{
  console.log("Fim da instrução try/catch/finally")
}


//multiplos try/catch
try{
  let x = y + 10;
  console.log(x);
}catch(erro){
  if(erro instanceof TypeError){
    console.log("TypeError");
  } else if(erro instanceof ReferenceError){
    console.log("ReferenceError");
  }
}