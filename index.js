let canvas = document.getElementById('canvas'),
papel = canvas.getContext('2d'),
color = document.getElementById('color'),
width = document.querySelector('#width'),
left = document.querySelector('.cuatro'),
right = document.querySelector('.seis'),
up = document.querySelector('.dos'),
down = document.querySelector('.ocho'),
outputWidth = document.querySelector('.width-output');
document.addEventListener('keydown', dibujar)
left.addEventListener('mousedown', dibujarLeft)
right.addEventListener('mousedown', dibujarRight)
down.addEventListener('mousedown', dibujarDown)
up.addEventListener('mousedown', dibujarUp)

outputWidth.textContent = width.value

width.addEventListener('input', function(){
  outputWidth.textContent = width.value
})

let x = 150, y = 150, movimiento = 10,
xi = x, 
yi = y, 
xf = x, 
yf = y;

function dibujarLeft(){   
      xi = xf
      yi = yf 
      xf -= movimiento
      xi = xf+movimiento
      dibujarLinea(xi, yi, xf, yf, papel, color.value, width.value)        
}
function dibujarRight(){
  xi = xf
  yi = yf
  xf += movimiento
  xi = xf - movimiento
  dibujarLinea(xi, yi, xf, yf, papel, color.value, width.value)
}
function dibujarDown(){
    xi = xf
    yi = yf
    yf += movimiento
    yi = yf - movimiento
    dibujarLinea(xi, yi, xf, yf, papel, color.value, width.value)
}
function dibujarUp(){
    xi = xf
    yi = yf
    yf -= movimiento
    yi = yf + movimiento
    dibujarLinea(xi, yi, xf, yf, papel , color.value, width.value)
}
function dibujar(e){
  switch (e.keyCode){
    case 37:    
     xi = xf
      yi = yf 
      console.log('vamos para la izquierda')
      xf -= movimiento
      xi = xf+movimiento
      dibujarLinea(xi, yi, xf, yf, papel, color.value, width.value)     
    break;

    case 38:
      xi = xf
      yi = yf
      console.log('vamos para arriba')
      yf -= movimiento
      yi = yf + movimiento
      dibujarLinea(xi, yi, xf, yf, papel , color.value, width.value)
    break;

    case 39:
      xi = xf
      yi = yf
      console.log('vamos para la derecha')
      xf += movimiento
      xi = xf - movimiento
      dibujarLinea(xi, yi, xf, yf, papel, color.value, width.value)
    break;
      
    case 40:
      xi = xf
      yi = yf
      console.log('vamos para abajo')
      yf += movimiento
      yi = yf - movimiento
      dibujarLinea(xi, yi, xf, yf, papel, color.value, width.value)
    break;
  }
}

function dibujarLinea(xi, yi, xf, yf, lienzo, color, width){
  lienzo.beginPath()
  lienzo.strokeStyle = color;
  lienzo.lineWidth = width;
  lienzo.moveTo(xi, yi) 
  lienzo.lineTo(xf ,yf)
  lienzo.stroke()
  lienzo.closePath()
}

