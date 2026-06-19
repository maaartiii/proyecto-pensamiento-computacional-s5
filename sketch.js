let trol;


let velocidad = 5;


let posY = 0;

let colorFiltro;



function setup() {
  createCanvas(windowWidth, windowHeight);
  trol = loadImage("./troolllll.jpg")
  
  colorFiltro = color(255);
}

function draw() {
  tint(colorFiltro);
 
 
  let r = map(mouseX, 0, width, 0, 255);
  let g = map(mouseY, 0, height, 0, 255);
  let b = 150;
  background(r, g, b)
  image(trol, width*0.2/5, posY, 100, 100);
 
   posY = posY + velocidad;
  
  if (posY > 280) {
    velocidad = random(-5, -10);
    colorFiltro = color(random(255), random(255), random(255));
  }

  
  if (posY < 20) {
    velocidad = random(5, 10); 
    colorFiltro = color(random(255), random(255), random(255));
  }


  line(1, 20, 400, 20)
  line(1, 380, 400, 380)

  line(width*0.2/5, 0, width*0.2/5, height);
  line(width*4.8/5, 0, width*4.8/5, height);
}
 