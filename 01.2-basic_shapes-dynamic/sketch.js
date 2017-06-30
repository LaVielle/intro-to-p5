// We declare our varialbes.
   // Note: scope is important. We declare our functions here so that we can access them througout our code. If we declared them in setup() and tried to access them in draw() we would get an error saying that the varialbles are not definied.
var posX;
var posY;
var rectW;
var rectH;

function setup(){

   //create the canvas in which you will draw stuff
   createCanvas(500,500); // try changing just the size of the canvas and see how the rectangles react

   // set the background color to black
   background(0);

   // places a rectangle according to its center, as opposed to the default top left corner
   rectMode(CENTER);

   // set the rectangle's color to white
   fill(255);

   // draw a small rectangle to the canvas
   rect(width/2, 0.1*height, 0.5*width, 0.1*height);

   // a medium rectangle
   rect(width/2, 0.3*height, 0.7*width, 0.15*height);

   // We now initialize our variables with the values we want to place our third rectangle at
   posX = width/2;
   posY = 0.65*height;
   rectW = 0.9*width;
   rectH = 0.4*height;

   // a large rectangle
   rect(posX, posY, rectW, rectH);

}


// we are not using the draw() function yet...
function draw(){

}
