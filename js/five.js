function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}
function setup() {
createCanvas(windowWidth, windowHeight);

x = width*0.2;
y = height*0.4;
w = 300;
h = 70;

x1 = width*0.7;
y1 = height*0.6;
w1 = 200;
h1 = 200;

x3 = width*0.1;
y3 = height*0.1;
w3 = 100;
h3 = 100;

x4 = width*0.5;
y4 = height*0.6;
w4 = 8;
h4 = 100;

x5 = width*0.7;
y5 = height*0.2;
w5 = 55;
h5 = 8;
}


function draw() {
noStroke()
background(250, 205, 100);

// // солнце
// if ((mouseX > 500) && (mouseX < 570) && (mouseY > 20) && (mouseY < 100)){
// fill(255, 222, 173)
// }
// else {
// fill(244, 164, 96);
// }
// ellipse(540, 60, 70, 70)


if (mouseX > x1 && mouseX < x1 + w1 && mouseY > y1 && mouseY < y1 + h1) {
rollover1 = true;
}
else {
rollover1 = false;
}
if (dragging1) {
x1 = mouseX + offsetX1;
y1 = mouseY + offsetY1;
}

if (dragging1) {
fill (255, 255, 255)
}
else if (rollover1) {
fill(101, 161, 255);
}
else {
fill(85, 107, 470);
}
rect(x1, y1, w1, h1);


if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
rollover = true;
}
else {
rollover = false;
}
if (dragging) {
x = mouseX + offsetX;
y = mouseY + offsetY;
}



if (dragging) {
fill (255, 255, 255)
}
else if (rollover) {
fill(255, 152, 149);
}
else {
fill(250, 105, 100);
}
rect(x, y, w, h);




if (mouseX > x3 && mouseX < x3 + w3 && mouseY > y3 && mouseY < y3 + h3) {
rollover3 = true;
}
else {
rollover3 = false;
}
if (dragging3) {
x3 = mouseX + offsetX3;
y3 = mouseY + offsetY3;
}

if (dragging3) {
fill (150, 150, 150, 150)
}
else if (rollover3) {
fill(200, 200, 200, 150);
}
else {
fill(255, 255, 255, 150);
}
stroke(0)
strokeWeight(8)
rect(x3, y3, w3, h3);



if (mouseX > x4 && mouseX < x4 + w4 && mouseY > y4 && mouseY < y4 + h4) {
rollover4 = true;
}
else {
rollover4 = false;
}
if (dragging4) {
x4 = mouseX + offsetX4;
y4 = mouseY + offsetY4;
}

if (dragging4) {
fill (150, 150, 150)
}
else if (rollover4) {
fill(100, 100, 100);
}
else {
fill(0, 0, 0);
}
noStroke()
rect(x4, y4, w4, h4);


if (mouseX > x5 && mouseX < x5 + w5 && mouseY > y5 && mouseY < y5 + h5) {
rollover5 = true;
}
else {
rollover5 = false;
}
if (dragging5) {
x5 = mouseX + offsetX5;
y5 = mouseY + offsetY5;
}

if (dragging5) {
fill (150, 150, 150)
}
else if (rollover5) {
fill(100, 100, 100);
}
else {
fill(0, 0, 0);
}
rect(x5, y5, w5, h5);

}



var dragging = false;
var rollover = false;

var dragging1 = false;
var rollover1 = false;

var dragging3 = false;
var rollover3 = false;

var dragging4 = false;
var rollover4 = false;

var dragging5 = false;
var rollover5 = false;

//var x, y, w, h;
var offsetX, offsetY, offsetX1, offsetY1, offsetX3, offsetY3, offsetX4, offsetY4, offsetX5, offsetY5;






function mousePressed() {

if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
dragging = true;
offsetX = x-mouseX;
offsetY = y-mouseY;
}

if (mouseX > x1 && mouseX < x1 + w1 && mouseY > y1 && mouseY < y1 + h1) {
dragging1 = true;
offsetX1 = x1-mouseX;
offsetY1 = y1-mouseY;
}

if (mouseX > x3 && mouseX < x3 + w3 && mouseY > y3 && mouseY < y3 + h3) {
dragging3 = true;
offsetX3 = x3-mouseX;
offsetY3 = y3-mouseY;
}

if (mouseX > x4 && mouseX < x4 + w4 && mouseY > y4 && mouseY < y4 + h4) {
dragging4 = true;
offsetX4 = x4-mouseX;
offsetY4 = y4-mouseY;
}

if (mouseX > x5 && mouseX < x5 + w5 && mouseY > y5 && mouseY < y5 + h5) {
dragging5 = true;
offsetX5 = x5-mouseX;
offsetY5 = y5-mouseY;
}
}

function mouseReleased() {
dragging1 = false;
dragging = false;
dragging3 = false;
dragging4 = false;
dragging5 = false;
}
