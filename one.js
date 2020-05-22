function setup() {
 createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  stroke(255);
  strokeWeight(5);
  if (mouseIsPressed === true) {
  line(mouseX, mouseY, pmouseX, pmouseY);
}
}
