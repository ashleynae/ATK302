var myState = 0 ;
var timer = 0 ;
var lake ;
var x = 0 ;
var mySunset ;

function setup() {
  // put setup code here
createCanvas(800, 800) ;
lake = loadImage("assets/lake.JPG") ;
mySunset = loadImage("assets/mySunset.png") ;
}

function draw() {
  // put drawing code here

switch(myState){
case 0:
image(lake, 0, 0, width, height) ;
//this is an image I took myself
fill('blue') ;
textSize(30) ;
text(' The Ocean \n By: Ashley Pryor', x, 100) ;
x = x + 2 ;
if(x > width) {
  x = 1
}

break ;

case 1:
background('purple') ;
fill('white') ;
textSize(30) ;
text('The high rise of the tide awakened me from a sleep \n A cool breeze crawls up my skin \n I feel the beats of the ocean in my heart \n I can hear the sound of the waves calming my desire to fall deeper into this black hole', 30, 300, 600, 600) ;

break ;

case 2:
background('lightgreen') ;
fill('white') ;
textSize(30) ;
text('The power of my lungs contracting with quick breaths liberates uneasiness \n Like the clash of the billows match my heart beat \n The flux of the wave', 30, 200, 600, 600) ;
timer++ ;
if (timer > 800) {
  myState = 3 ;
  timer = 0 ;
}
break ;

case 3:
background('lightpink') ;
fill('white') ;
textSize(30) ;
text('Moved so smooth I didn\'t want to dig my own grave \n The reoccurring thoughts of fading into the shadows began to flounder \n I no longer hear the voice of destruction telling me I\'m worthless', 20, 20, 600, 600) ;
timer++ ;
if (timer > 700) {
  myState = 4 ;
  timer = 0 ;
}
break ;

case 4:
background('blue') ;
image(mySunset, 0, 0, width, height) ;
//This is anpther picture I took myself
fill('white') ;
textSize(30) ;
text('The deep brine of the current coming to save me \n I\'m intertwined with the yearning of rejoiced tranquility \n My fears start to fade away into the gusting winds of the horizon', 10, 10, 600, 600) ;
timer++ ;
if (timer > 700) {
  myState = 0 ;
  timer = 0 ;
}
break ;
}
//This is where my switch statement ends
}
//This is where the draw function ends
function mouseReleased() {
myState = myState + 1 ;
if (myState > 4) {
  myState = 0 ;
}
//mouseReleased ends
}
