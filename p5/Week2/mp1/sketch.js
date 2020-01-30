function setup() {
  // put setup code here
  createCanvas(500, 500) ;
  //ellipseMode(CENTER) ;
}

function draw() {
  // put drawing code here
  background("blue") ;
  //stuff thst we always want to show
  fill(163, 107, 47) ;
  rect(236,163,20,20) ;
  ellipse(246,127,75,75) ;
  //the head of the body
  fill("purple")
  rect(195,184,100,200,20) ;
  fill(0)
  rect(210,384,20,100) ;
  rect(257,385,20,100) ;
  fill(235, 64, 52)
  quad(198,205,198,223,149,201,110,136) ;
  quad(292,209,293,222,342,209,384,155) ;
  //this is the eyes
fill('brown') ;
ellipse(228, 120, 40, 30) ;
ellipse(264, 120, 40, 30) ;
fill('white') ;
ellipse(228, 120, 20, 20);
ellipse(264, 120, 20, 20);


  if (mouseIsPressed) {
    //stuff that shows when the mouse is pressed
    fill('green') ;
    ellipse(228, 120, 50, 50);
    ellipse(264, 120, 50, 50);

  }
}


function mouseReleased() {
  console.log(mouseX +", " + mouseY) ;
}
