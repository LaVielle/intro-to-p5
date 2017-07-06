
function setup(){

   createCanvas(500,500);
   background(0);

   // We can limit how often draw() is called, a.k.a. the number of frames per second
   // Goes from 0 to 60 frames per second
   frameRate(5);

}

function draw(){

   background(0);
   fill(255);

   // draw 100 ellipses to the canvas each time draw() loops
   for (var i = 0; i < 100; i ++){
      // sets a random diameter for each ellipse
      var diameter = random(50);
      ellipse(random(width), random(height), diameter, diameter);
   }

}
