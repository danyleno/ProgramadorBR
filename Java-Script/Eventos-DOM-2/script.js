function mudaH1(i){
  var h1 = document.getElementsByTagName('h1')[0]
 titulo.innerText = i.value
}
function onOver(elemento){
  var h1 = document.getElementsByTagName('h1')[0]
  elemento.style.backgroundColor = 'red'

}
function onOut(elemento){
  elemento.style.backgroundColor = 'antiquewhite'
}