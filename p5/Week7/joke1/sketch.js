var myState = 0


function preload(){


}



function setup() {
  // put setup code here
  createCanvas(800, 800) ;
}

function draw() {
  // put drawing code here
background('pink') ;
   switch(myState){
     case 0:
     fill("magenta")
     textSize(30)
     text("I told my wife she drew her eyebrows too high", 100, 100) ;
     break;

     case 1:
     fill("magenta")
     textSize(30)
     text("She looked surprise", 100, 100) ;
     break;

   }
}

function mouseReleased() {
  myState = myState + 1 ;
  if (myState > 1) {
    myState = 0 ;
  }
}
