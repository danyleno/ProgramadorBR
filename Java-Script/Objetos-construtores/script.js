/*function criarAluno(nome , n1, n2){
  return{
    nome: nome,
    nota1: n1,
    nota2: n2,
    media: function(){
      return(this.nota1 + this.nota2)/2
    }
  }

}
*/
function aluno(nome, n1, n2){
  this.nome = nome
  this.nota1 = n1
  this.nota2 =n2
  this.media = function(){
    return(this.nota1 + this.nota2)/2
  }
}
/*var turma = [
  criarAluno('daniel', 10, 8),
  criarAluno('paula', 4, 7),
  criarAluno('julia', 6, 7)
]
var aluno= turma[0]
*/
var a = new aluno('igor', 5, 8)
console.log(a.media())
/*
for (var aluno of turma){
  console.log(aluno.nome + " " + aluno.media())
}
*/