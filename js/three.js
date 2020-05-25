let love;
let l;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  love = createCanvas(windowWidth, windowHeight);
  love.mouseOver(changeD);
  l = 20;
}

function draw() {
  background(105, 164, 255);
  noStroke()

  ellipse(width / 2, height / 2, l, l);

    if (mouseIsPressed == true) {
    fill(250, 105, 100);
  }
  else {
    fill(250, 205, 100);
  }
}
function changeD() {
  l = l + 40;
}
