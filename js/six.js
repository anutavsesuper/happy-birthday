let love = 100;

function setup() {
 createCanvas(windowWidth, windowHeight);
  background(0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  noFill();

  if (mouseIsPressed === true) {
  stroke(250, sin(love)*250, 100);
  strokeWeight(5);
  ellipse(mouseX, windowHeight-mouseY, 60, 60);
  love += 0.08;
}
}
