let ini = document.getElementById('inicio')
let dis = document.getElementById('distancia')
let pas = document.getElementById('passo')

let res = document.getElementById('resultado')

function atravessar() {
  let ini1 = ini.value
  let dis1 = dis.value
  let pas1 = pas.value

  var longe = [dis1]
  while (ini1 < dis1) {
    ini1 += pas1
    return 
  }
  resultado.innerHTML += `${ini1} `
}
