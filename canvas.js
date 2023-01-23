function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("rgb(1,1,161)");
  
  shapeWidth = width/2
  
  fill("green")
  stroke("white")
  strokeWeight(5)
  circle(width/2,height/2,shapeWidth)
  
  fill("red")
  beginShape();
 
  vertex(width*3/7,height*2/5)
  vertex(width/2,height/4)
  
  vertex(width*4/7,height*2/5)
  vertex(width*3/4,height*2/5)
  
  vertex(width*3/5,height/2)
  
  vertex(width*2/3,height*11/16)
  
  vertex(width/2,height*3/5)
  
  vertex(width*1/3,height*11/16)
  
  vertex(width*2/5,height/2)
 
  vertex(width*1/4,height*2/5)
  endShape(CLOSE)
}