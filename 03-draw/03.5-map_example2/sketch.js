// Declaring variables
var color1;
var color2;
var rectW;
var rectH;
var numBars;

function setup(){
   createCanvas(500,500);
   rectMode(CENTER);
   noStroke();
}

function draw(){

   // Mapping colors to x and y position of the mouse
   color1 = map(mouseX, 0, width, 0, 255);
   color2 = map(mouseY, 0, height, 0, 255);

   // Mapping rectangle dimensions to x and y position of the mouse
   rectW = map(mouseX, 0, width, 0, 255);
   rectH = map(mouseY, 0, height, 0, 255);

   // Mapping number of bars to x position of the mouse
   numBars = map(mouseX, 0, width, 0, 100);

   // making background color change with x and y position of the mouse
   background(color1,color2,200);
   fill(255);
   // modifying size and position of rectangle according to x and y position of the mouse
   rect(mouseX,mouseY, rectW,rectH);

   // drawing more or less bars according to x position of the mouse
   for (var i = 0; i < numBars; i++){
      fill(0, -color2, color1);
      rect(i * (width/numBars), height/2, 1, height);
      fill(0, -color1, color2);
      rect(i * numBars, height/2, 1, height/2);
   }
}
