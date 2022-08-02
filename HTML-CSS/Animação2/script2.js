let tela = document.querySelector('#tela')
let ctx = tela.getContext('2d')

let circle = {
  x: 250,
  y: 250,
  raio: 100,
  inicio: 0,
  fim: 0,
  antiH: true
}

function drawCircle(c) {
  ctx.beginPath()
  ctx.rect(0,0, 500, 500)
  ctx.fillStyle = 'beige'
  ctx.fill()

  ctx.beginPath()
  ctx.strokeStyle = 'red'
  ctx.fillStyle = 'blue'
  ctx.arc(c.x, c.y, c.raio, c.inicio, c.fim, c.antiH)
  ctx.stroke()
  ctx.fill()
}
drawCircle(circle)
setInterval(function () {
  if (circle.fim < 2 * Math.PI) {
    circle.fim += 0.1
    circle.x += 1
  }
  drawCircle(circle)
}, 40)
