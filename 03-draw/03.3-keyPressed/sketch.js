// Declaring variables
var sz = 50;
var posX;
var posY;
var move = 10;

function setup(){
   createCanvas(500,500);
   background(0);
   colorMode(HSL);
   rectMode(CENTER);
   noStroke();

   // Initializing variables
   posX = width/2;
   posY = height/2;
}

function draw(){

   background(0);
   fill(255);
   rect(posX, posY, sz,sz);

   // If the left arrow is down, execute the code in the if statement
   // Try commenting the follwing 4 statements and using the keyPressed() function bellow instead
   if (keyIsDown(LEFT_ARROW)){
      posX -= move;
      console.log('move left');
   }
   if (keyIsDown(RIGHT_ARROW)){
      posX += move;
      console.log('move right');
   }
   if (keyIsDown(UP_ARROW)){
      posY -= move;
      console.log('move up');
   }
   if (keyIsDown(DOWN_ARROW)){
      posY += move;
      console.log('move down');
   }

}

// keyPressed() is executed every time a specific key is pressed
// If you need more precision, this function might be better in your application.
// Uncomment the following code an try it out:

// function keyPressed(){
//    if (keyCode === LEFT_ARROW) {
//        posX -= move;
//        console.log('left');
//    }
//    else if (keyCode === RIGHT_ARROW) {
//        posX += move;
//        console.log('right');
//    }
//    else if (keyCode === UP_ARROW) {
//        posY -= move;
//        console.log('up');
//    }
//    else if (keyCode === DOWN_ARROW) {
//        posY += move;
//        console.log('down');
//    }
// }
