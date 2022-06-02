var nomes = ['João', 'Maria', 'Carlos']
var notasA = [6.5, 8.9, 4.9]
var notasB = [5.0, 5.0, 7.5]

function media(n1, n2) {
  return (n1 + n2) / 2
}
function passou(media) {
  var resultado = 'Reprovado'
  if (media >= 6) {
    resultado = 'Aprovado'
  }
  return resultado
}
for (var index in nomes) {
  var notas1 = notasA[index]
  var notas2 = notasB[index]
  var m = media(notas1, notas2)
  console.log(
    nomes[index] +
      ' - ' +
      notas1[index] +
      ' - ' +
      notas2[index] +
      ' - ' +
      m +
      ' - ' +
      passou(m)
  )
}
