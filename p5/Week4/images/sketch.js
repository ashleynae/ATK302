var ice1 ;
var ice2 ;
var sunset ;

function setup() {
//put setup code here
createCanvas(800, 800) ;
ice1 = loadImage("assets/ice1.jpeg") ;
ice2 = loadImage("assets/ice2.jpg") ;
sunset = loadImage("assets/sunset.jpeg") ;
  }

function draw() {
  // put drawing code here
image(ice1, 0, 0, 200, 200) ;
image(ice2, 0, 200, 200, 200) ;
image(sunset, 0, 400, 200, 200) ;
}
