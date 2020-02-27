var myState = 0
var timer = 0

function preload() {

}

function setup() {
  // put setup code here
createCanvas(800, 800) ;
rectMode(CENTER) ;
ellipseMode(CENTER) ;
}

function draw() {
  // put drawing code here
//yellow rectangle
fill('black')
rect(width/2, height/2, 150, 400) ;

switch(myState) {
  case 0: // red light
  fill('red') ;
  ellipse(width/2, height/2, 100, 100) ;
  fill('tan')
  ellipse(width/2, height/2-110, 100, 100) ;
  ellipse(width/2, height/2+110, 100, 100) ;
  timer++ ;
  if(timer > 200) {
    myState = 1 ;
    timer = 0 ;
  }
  break ;

 case 1: // green light

 fill('green') ;
 ellipse(width/2, height/2, 100, 100) ;
 fill('grey')
 ellipse(width/2, height/2-110, 100, 100) ;
 ellipse(width/2, height/2+110, 100, 100) ;
 timer++ ;
 if(timer > 200) {
   myState = 2 ;
   timer = 0 ;
 }
break ;

case 2: //yellow light
fill('yellow') ;
ellipse(width/2, height/2, 100, 100) ;
fill('beige')
ellipse(width/2, height/2-110, 100, 100) ;
ellipse(width/2, height/2+110, 100, 100) ;
timer++ ;
if(timer > 200) {
  myState = 0 ;
  timer = 0 ;
}
  break ;
}

}
