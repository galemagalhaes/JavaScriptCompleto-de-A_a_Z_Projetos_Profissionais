function soma(num1, num2){
  if(typeof num1 !== 'number'){
    throw TypeError('O primeiro argumento deve ser um número.')
  }
  if(typeof num2 !== 'number'){
    throw TypeError('O segundo argumento deve ser um número.')
  }
  return num1 + num2;
}

try{
  console.log(soma(10,20));
}catch(erro){
  console.log(erro);
}
try{
  console.log(soma("10",20));
}catch(erro){
  console.log(erro);
}
try{
  console.log(soma(10,"Manuel"));
}catch(erro){
  console.log(erro);
}
