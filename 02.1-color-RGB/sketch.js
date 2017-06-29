function setup(){
   createCanvas(500,500)
   background(0)
   noStroke()

   rectW = width/2;
   rectH = height/2;
   radius = width/5;

   // draw a yellow rectangle
   fill(255,200,100)
   rect(0, 0, rectW, rectH)

   // draw a grey rectangle
   fill(100,100,100)
   rect(rectW, 0, rectW, rectH)

   // draw a green rectangle
   fill(10,200,150)
   rect(0, rectH, rectW, rectH)


   // draw a blue rectangle
   fill(50,50,255)
   rect(rectW, rectH, rectW, rectH)

   // draw a pink circle with a 10px black stroke
   strokeWeight(10)
   stroke(0,0,0)
   fill(255, 100, 180)
   ellipse(width/2, height/2, radius, radius)
}


// we are not using the draw() function yet...
function draw(){

}
