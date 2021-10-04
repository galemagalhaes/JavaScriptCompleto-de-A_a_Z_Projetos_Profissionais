//Segurança - ocultar senha

function ocultaSenha(senha){
  let senhaAux = "";
  for(let i = 0; i < senha.length; i++){
    senhaAux += "*";    
  }
  return senhaAux;
}
const usuario = {
  nome: "José",
  email: "jose@email.com", 
  senha: "654321"
}
usuario.senha = ocultaSenha(usuario.senha);
console.log(usuario);