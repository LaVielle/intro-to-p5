// HSL is much better for mathematically modifying color
// If you want to go a bit deeper into HSL, check out HSLuv (http://www.hsluv.org/), a JavaScript library that adapts color outputs to the human eye's perception.

function setup(){
   createCanvas(500,500)
   background(0)
   noStroke()

   // set colorMode to HSL or HSB -its the same
   colorMode(HSL)

   numRect = 10;
   rectW = width/numRect;
   rectH = height/4;
   radius = width/5;

   // note: we use a for loop to draw rectangles of different colors.
   // See the next section "multiple shapes" to lean more about for loops.

   // going all around the color wheele
   for (var i = 0; i < numRect; i++){
      fill(i * (360/numRect), 100, 50)
      rect(i*rectW, 0, rectW, rectH)
   }

   // going around part of the color wheele
   for (var i = 0; i < numRect; i++){
      fill(100 + i * numRect, 100, 50)
      rect(i*rectW, 2*rectH, rectW, rectH)
   }

   // modifying light: going from obscure to clear
   for (var i = 0; i < numRect; i++){
      fill(i * (360/numRect), 100, i * (50/numRect))
      rect(i*rectW, rectH, rectW, rectH)
   }

   // modifying saturation: going from bland to vivid
   for (var i = 0; i < numRect; i++){
      fill(i * (360/numRect), i*(100/numRect), 50)
      rect(i*rectW, 3*rectH, rectW, rectH)
   }

}


// we are not using the draw() function yet...
function draw(){

}
