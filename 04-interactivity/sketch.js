function setup(){
   createCanvas(500,500)

   rectMode(CENTER)
   noStroke()
}


function draw(){
   var c1 = map(mouseX, 0, width, 0, 255)
   var c2 = map(mouseY, 0, height, 0, 255)

   var rectW = map(mouseX, 0, width, 0, 255)
   var rectH = map(mouseY, 0, height, 0, 255)

   var numBars = map(mouseX, 0, width, 0, 100)

   background(c1,c2,200)
   fill(255)
   rect(mouseX,mouseY, rectW,rectH)

   for (var i = 0; i < numBars; i++){
      fill(0, -c2, c1)
      rect(i * (width/numBars), height/2, 1, height)
      fill(0, -c1, c2)
      rect(i * numBars, height/2, 1, height/2)
   }
}
