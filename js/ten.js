let slotSize = 100;
let marginX;
let marginY;

function setup() {

createCanvas(windowWidth, windowHeight);

pixelDensity(1);

marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;

}


function draw() {

  background(0)
  for (let i = marginX / 2 + slotSize / 2; i < width - marginX / 2; i += slotSize) {
  for (let j = marginY / 2 + slotSize / 2; j < height - marginY / 2; j += slotSize) {

  let s = map(dist(i,j,mouseX,mouseY), 0, sqrt(width*width + height*height), slotSize, 1)
  rect(i, j, 0.8*s, 0.8*s);

  }
  }
  if (mouseIsPressed == true) {
    fill(105, 164, 255);
  }
  else {
    fill(255, 255, 255);
  }
}



function windowResized() {
resizeCanvas(windowWidth, windowHeight);
marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;
}
