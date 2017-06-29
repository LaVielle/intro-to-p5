// We declare variables that we'll use to size our rectangles.
// Note we declare them OUTSIDE of the setup() function. This makes them 'global variables' that we can access in the draw() function, ro in any other function.
var rectW = 10;
var rectH = 10;
var diameter = 10;

function setup(){
   createCanvas(500,500)
   background(0)
   noStroke()

   // lets us place a ractangle according to its center instead of its top left corner
   rectMode(CENTER)

   colorMode(HSL)

}


function draw(){

   // We redraw the background every time. Try commenting this line out and see what happens.
   background(0)

   // we use a for loop to draw multiple rectangles at random points on the canvas
   for (var i = 0; i < 10; i++){
      rect(random(width), random(height), rectW, rectH)
   }

   // now lets draw rectangles of growing size
   for (var i = 0; i < width/rectW-5; i++){
      fill(200, i, i * (100/(width/rectW)))
      rect(i * rectW + 5, height/2, rectW, rectH*i)
   }

   for (var i = 0; i < 100; i++){
      fill(i*(360/100),100,50)
      ellipse(i* (width/100), i * (height/100),diameter+i,diameter+i)
   }

}
