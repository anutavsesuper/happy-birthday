let symmetry = 6;
let sw = 0;

let angle = 360 / symmetry;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // background('#FA6964');
  // background('#FA6964');
  background(0);

  angleMode(DEGREES);
}


function draw() {
  translate(width*0.48, height*0.5);

  if (mouseX > 0
      && mouseX < width
      && mouseY > 0
      && mouseY < height) {
    let mx = mouseX - width / 2;
    let my = mouseY - height / 2;
    let pmx = pmouseX - width / 2;
    let pmy = pmouseY - height / 2;

    if (mouseIsPressed) {
      for (let i = 0; i < symmetry; i++) {
        rotate(angle);
        stroke(250, sin(sw)*200, 100)
        // sin(sw)*
        strokeWeight(3);
        line(mx, my, pmx, pmy);
        push();
        scale(1, -1);
        line(mx, my, pmx, pmy);
        pop();
        sw += 0.7;
      }
    }
  }
}
