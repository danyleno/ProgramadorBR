let tela = document.querySelector('#tela')
let ctx = tela.getContext('2d')
 
let img = new Image()
img.src = '15380727_1114296948683958_2389236411808842657_n.jpg'

img.onload = desenharImg
function desenharImg(){
  ctx.drawImage(this, 20, 20, this.naturalWidth / 2, this.naturalHeight / 2)
}

