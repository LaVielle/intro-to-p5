// Declaring variables
var sz = 50;
var hue;
var sat;
var light;
var numRects;

// Here we create an array, which will contain our rectangles
var boxes = [];

function setup(){
   createCanvas(500,500);
   background(0);
   colorMode(HSL);
   rectMode(CENTER);
   noStroke();

   // Initializing color variables
   hue = 360;
   sat = 100;
   light = 50;
}

function draw(){

   // We map the value of numRects to the x postion of the mouse. The further to the right, the more rectangles will be created when mouse is pressed.
   numRects = map(mouseX, 0, width, 1, 10);

}

// mousePressed() is executed every time the mouse is... pressed!
function mousePressed(){
   for (var i = 0; i < numRects; i++){
      // select random color to fill the rectangle
      fill(random(hue), sat, light);
      // "push" the rectangle into the array. By this, we mean store a rectangle object in our boxes array. Like this we will be able to access it and modify it later.
      boxes.push(rect(random(width), random(height), random(sz),random(sz)));
   }
}
