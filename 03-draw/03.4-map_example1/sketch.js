// Declaring variables
var sz;
var col;

function setup(){
   createCanvas(500,500);
   colorMode(HSL);
   rectMode(CENTER);
   noStroke();
}

function draw(){

   background(0);

   // Mapping value of sz to the x position of the mouse
   sz = map(mouseX, 0, width, 0, width/2);

   // Mapping value of col to the y position of the mouse
   col = map(mouseY, 0, width, 0, 360/4);

   // Drawing 4 rectangles according to the positions, sizes, and colors just determined
   fill(col, 100, 50);
   rect(width*0.25, height*0.25, sz, sz);

   fill(2*col, 100, 50);
   rect(width*0.75, height*0.25, sz, sz);

   fill(3*col, 100, 50);
   rect(width*0.25, height*0.75, sz, sz);

   fill(4*col, 100, 50);
   rect(width*0.75, height*0.75, sz, sz);

}
