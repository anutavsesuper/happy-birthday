function preload() {
  one = loadImage('.../img/one.jpg');
  two = loadImage('../img/two.jpg');
  three = loadImage('../img/three.jpg');
  four = loadImage('../img/four.jpg');
  five = loadImage('../img/five.jpg');
  six = loadImage('../img/six.jpg');
  seven = loadImage('../img/seven.jpg');
  eight = loadImage('../img/eight.jpg');
}

function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}
function setup() {
createCanvas(windowWidth, windowHeight);

x = width*0.8;
y = height*0.4;
w = 197;
h = 164;

x1 = width*0.3;
y1 = height*0.6;
w1 = 220;
h1 = 220;

x3 = width*0.1;
y3 = height*0.1;
w3 = 183;
h3 = 164;

x4 = width*0.4;
y4 = height*0.47;
w4 = 220;
h4 = 44;

x5 = width*0.7;
y5 = height*0.2;
w5 = 380;
h5 = 100;

x6 = width*0.1;
y6 = height*0.2;
w6 = 348;
h6 = 252;

x7 = width*0.5;
y7 = height*0.2;
w7 = 252;
h7 = 252;

x8 = width*0.3;
y8 = height*0.2;
w8 = 600;
h8 = 84;
}


function draw() {
noStroke()
// background(250, 205, 100);
background(0);


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

image(one, x1, y1, w1, h1);


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

image(two, x, y, w, h);




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

image(three, x3, y3, w3, h3);



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

image(four, x4, y4, w4, h4);


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

image(five, x5, y5, w5, h5);




if (mouseX > x6 && mouseX < x6 + w6 && mouseY > y6 && mouseY < y6 + h6) {
rollover6 = true;
}
else {
rollover6 = false;
}
if (dragging6) {
x6 = mouseX + offsetX6;
y6 = mouseY + offsetY6;
}

image(six, x6, y6, w6, h6);


if (mouseX > x7 && mouseX < x7 + w7 && mouseY > y7 && mouseY < y7 + h7) {
rollover7 = true;
}
else {
rollover7 = false;
}
if (dragging7) {
x7 = mouseX + offsetX7;
y7 = mouseY + offsetY7;
}

image(seven, x7, y7, w7, h7);



if (mouseX > x8 && mouseX < x8 + w8 && mouseY > y8 && mouseY < y8 + h8) {
rollover8 = true;
}
else {
rollover8 = false;
}
if (dragging8) {
x8 = mouseX + offsetX8;
y8 = mouseY + offsetY8;
}

image(eight, x8, y8, w8, h8);
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

var dragging6 = false;
var rollover6 = false;

var dragging7 = false;
var rollover7 = false;

var dragging8 = false;
var rollover8 = false;


//var x, y, w, h;
var offsetX, offsetY, offsetX1, offsetY1, offsetX3, offsetY3, offsetX4, offsetY4, offsetX5, offsetY5, offsetX6, offsetY6, offsetX7, offsetY7, offsetX8, offsetY8;






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


if (mouseX > x6 && mouseX < x6 + w6 && mouseY > y6 && mouseY < y6 + h6) {
dragging6 = true;
offsetX6 = x6-mouseX;
offsetY6 = y6-mouseY;
}

if (mouseX > x7 && mouseX < x7 + w7 && mouseY > y7 && mouseY < y7 + h7) {
dragging7 = true;
offsetX7 = x7-mouseX;
offsetY7 = y7-mouseY;
}

if (mouseX > x8 && mouseX < x8 + w8 && mouseY > y8 && mouseY < y8 + h8) {
dragging8 = true;
offsetX8 = x8-mouseX;
offsetY8 = y8-mouseY;
}
}

function mouseReleased() {
dragging1 = false;
dragging = false;
dragging3 = false;
dragging4 = false;
dragging5 = false;
dragging6 = false;
dragging7 = false;
dragging8 = false;
}
