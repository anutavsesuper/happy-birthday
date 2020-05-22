function setup() {
 createCanvas(windowWidth, windowHeight);
  background(0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  noStroke()

  push();
  translate(width * 0.9, height * 0.2);
  rotate(frameCount / -100.0);
  star(0, 0, 20, 30, 5);
  pop();

  push();
  translate(width * 0.15, height * 0.85);
  rotate(frameCount / 100.0);
  star(0, 0, 30, 45, 5);
  pop();

  push();
  translate(width * 0.4, height * 0.1);
  rotate(frameCount / 100.0);
  star(0, 0, 5, 7, 5);
  pop();

  push();
  translate(width * 0.8, height * 0.5);
  rotate(frameCount / 100.0);
  star(0, 0, 7, 11, 5);
  pop();

  push();
  translate(width * 0.5, height * 0.92);
  rotate(frameCount / -100.0);
  star(0, 0, 10, 15, 5);
  pop();

  push();
  translate(width * 0.1, height * 0.5);
  rotate(frameCount / -100.0);
  star(0, 0, 10, 15, 5);
  pop();

  push();
  translate(width * 0.8, height * 0.8);
  rotate(frameCount / 100.0);
  star(0, 0, 15, 23, 5);
  pop();

  push();
  translate(width * 0.2, height * 0.2);
  rotate(frameCount / 100.0);
  star(0, 0, 15, 23, 5);
  pop();

  push();
  translate(width * 0.7, height * 0.2);
  rotate(frameCount / 100.0);
  star(0, 0, 10, 15, 5);
  pop();



  if (mouseIsPressed == true) {
    fill(250, 105, 100); // White
  }
  else {
    fill(105, 164, 255);   // Black
  }
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
