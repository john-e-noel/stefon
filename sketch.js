//The setup function only happens once
var diam1=0;

function setup() {
	createCanvas(500, 500);
background(173,35,150);
fill(169, 124, 125);
triangle(50,100,400,100,225,400);
   //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
   //an RGB color for the canvas' background
  //circle
  
  
fill(108, 63, 65);
noStroke(0);
ellipse(mouseX,mouseY,10,10);
  stroke(255,255,127); // an RGB color for the circle's border
  fill(0,250,250,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(50,100,30,30); // center of canvas, 20px dia
  stroke(255,255,127); 
  fill(0,250,250,150); 
  ellipse(400,100,30,30);
  stroke(255,255,127); 
  fill(0,250,250,150); 
  ellipse(50,400,30,30);
  stroke(255,255,127); 
  fill(0,250,250,150); 
  ellipse(400,400,30,30);
fill (0,250,70);
stroke (25, 50, 150);
rect(180,50,diam1,diam1);
fill(20,200,10);
fill (255,255,255);
rect(40,200,370,100);
fill(254, 254, 54);
textFont('Georgia');
textSize (30);
textStyle (ITALIC);
text('Coney Island is the best!',65,250);
fill(0, 0, 0);
textFont('Georgia');
textSize (15);
textStyle (ITALIC);
text('100',38,105);
fill(0, 0, 0);
textFont('Georgia');
textSize (15);
textStyle (ITALIC);
text('100',388,105);


}
function mousePressed(){
  if (diam1>=100){
    diam1=0;
}else{
 diam1=diam1+5; 
}
}