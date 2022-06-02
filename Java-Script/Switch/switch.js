var nota1 = 4.0
var nota2 = 9.0

var media = (nota1 + nota2) / 2

var conceito = ''

if (media >= 8.5) {
  conceito = 'Ótimo'
} else if (media >= 7.5) {
  conceito = 'Bom'
} else {
  conceito = 'Regular'
}
switch (conceito) {
  case 'Ótimo':
    document.write('parabens')
    break
    case "Bom":
    document.write('voce foi bem')
    break
    case "Regular":
      document.write('Voce passou na media')
      break
      default:
        document.write('Houve algum erro')
}
