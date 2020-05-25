function setup() {
  createCanvas(windowWidth, windowHeight);
  // background(250, 105, 100);
  background(0);
}

function draw() {
  variableEllipse(mouseX, mouseY, pmouseX, pmouseY);
}

function variableEllipse(x, y, px, py) {
  let speed = abs(x - px) + abs(y - py);
  push()
  fill(random(colors));
  // noStroke();
  // stroke(speed);
  stroke(0);
  strokeWeight(0.5);
  star(x, y, speed, speed*0.62, 5);
}

const white = '#FFFFFF'
const darkpink = '#FF4D47'
const pink = '#FF827D'
const lighpink = '#FFB6B4'
const darkyellow = '#FFC130'
const yellow = '#FACD64'
const lighyellow = '#FFDD8E'
const darkblue = '#65A1FF'
const blue = '#7EB1FF'
const lightblue = '#A9CBFF'

let colors = [darkpink, pink, lighpink, white, darkyellow, yellow, lighyellow, darkblue, blue, lightblue];

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function star(x, y, radius1, radius2, npoints) {
  //fill(color2);
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = (random(0,1)); a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
