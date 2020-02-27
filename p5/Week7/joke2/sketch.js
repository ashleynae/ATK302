var myState = 0
var timer = 0

function preload(){

}



function setup() {
  // put setup code here
  createCanvas(800, 800) ;
}

function draw() {
  // put drawing code here
background('magenta') ;


   switch(myState){
     case 0:
     fill("white")
     textSize(30)
     text("Someone stole my mood ring", 100, 100) ;
     timer++ ;
     if(timer > 200) {
       myState = 1 ;
       timer = 0 ;
     }
     break;

     case 1:
     fill("white")
     textSize(30)
     text("I don't know how I feel about that", 100, 100) ;
     timer++
     if(timer > 200) {
       myState = 0 ;
       timer = 0 ;
     }
     break;

   }
}
