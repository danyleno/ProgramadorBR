//Carne - 400g por pessoa, mais de 6hrs - 650g
//Cerveja - 1200ml por pessoa, mais de 6hrs - 2000ml
//Refrigerante/agua - 1000ml por pessoa, mais de 6 horas 1500ml

//Crianças valem por 0,5
let inputA = document.getElementById('adulto')
let inputC = document.getElementById('crianca')
let inputD = document.getElementById('duracao')

let resultado = document.getElementById('resultado')

function calcular(){
let adulto = inputA.value
let crianca = inputC.value
let duracao = inputD.value

let carneTot = adulto * carnePP(duracao) + crianca * (carnePP(duracao)/2)
let cervejaTot = adulto * cervejaPP(duracao)
let bebidaTot = adulto * bebidaPP(duracao) + crianca * (bebidaPP(duracao/2))
 
resultado.innerHTML = `<p>${carneTot / 1000}Kg de carne</p>`
resultado.innerHTML += `<p>${Math.ceil(cervejaTot / 355)} latas de cerveja</p>`
resultado.innerHTML += `<p>${Math.ceil(bebidaTot / 2000)}L de refrigerante</p>`
}
 
function carnePP(duracao){
  if (duracao >= 6){
    return 650
  }
  else{
    return 400
  }
}
function cervejaPP(duracao){
  if (duracao >= 6){
    return 2000
  }
  else{
    return 1200
  }
}
function bebidaPP(duracao){
  if (duracao>= 6){
    return 1500
  }
  else{
    return 1000
  }
}
