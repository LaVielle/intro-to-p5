function setup(){
   //create the canvas in which you will draw stuff
   createCanvas(500,500)

   // set the background color to black
   background(0)

   // set the rectangle's color to white
   fill(255)

   // draw a small rectangle to the canvas
   rect(50, 50, 50, 100)

   // a medium rectangle
   rect(150, 50, 100, 150)

   // a large rectangle
   rect(300, 50, 150, 200)

   // draw an ellipse (circle) to the center of the canvas
   ellipse(250, 250, 50, 50)

   // draw a triangle in the bottom left corner
   triangle(50,450, 150, 300, 250, 450)
}


// we are not using the draw() function yet...
function draw(){

}
