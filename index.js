let canvas = document.getElementById('canvas')
let papel = canvas.getContext('2d'),
color = document.getElementById('color');
document.addEventListener('keydown', mostrarColor)

let x = 150, y = 150, movimiento = 10,
xi = x, 
yi = y, 
xf = x, 
yf = y;


function mostrarColor(e){
  switch (e.keyCode){
    case 37:    
     xi = xf
      yi = yf 
      console.log('vamos para la izquierda')
      xf -= movimiento
      xi = xf+movimiento
      dibujarLinea(xi, yi, xf, yf, papel, color.value)     
    break;

    case 38:
      xi = xf
      yi = yf
      console.log('vamos para arriba')
      yf -= movimiento
      yi = yf + movimiento
      dibujarLinea(xi, yi, xf, yf, papel , color.value)
    break;

    case 39:
      xi = xf
      yi = yf
      console.log('vamos para la derecha')
      xf += movimiento
      xi = xf - movimiento
      dibujarLinea(xi, yi, xf, yf, papel, color.value)
    break;
      
    case 40:
      xi = xf
      yi = yf
      console.log('vamos para abajo')
      yf += movimiento
      yi = yf - movimiento
      dibujarLinea(xi, yi, xf, yf, papel, color.value)
    break;
  }
}

function dibujarLinea(xi, yi, xf, yf, lienzo, color){
  lienzo.beginPath()
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 4;
  lienzo.moveTo(xi, yi) 
  lienzo.lineTo(xf ,yf)
  lienzo.stroke()
  lienzo.closePath()
}