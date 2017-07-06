// We declare the variables we'll use to size our rectangles.
// Note: we declare them OUTSIDE of the setup() function. This makes them 'global variables' that we can access in the draw() function, or in any other function.
var rectW;
var rectH;

function setup(){
   createCanvas(500,500);
   background(0);
   noStroke();

   // lets us place a rectangle according to its center instead of its top left corner
   rectMode(CENTER);

   // we now initialize our variables
   rectW = 10;
   rectH = height * .4;

   // first lets draw three rectangles on the upper half of the canvas
   rect(width * 0.25, height*0.25,rectW, rectH);
   rect(width * 0.5, height*0.25,rectW, rectH);
   rect(width * 0.75, height*0.25,rectW, rectH);

   // Now lets draw 20 rectangles on the second half of the canvas
   // But instead of typing rect(...) 20 times, we'll use a for loop:
   for (var i = 0; i < 20; i++){
      rect(i * (width/20), height*0.75,rectW, rectH);
   }
}


// we are not using the draw() function yet...
function draw(){

}
