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
  rect(236,163,20,20)
  ellipse(246,127,75,75) ;
  //the head of the body
  fill("purple")
  rect(195,184,100,200,20) ;
  fill(235, 64, 52)
  rect(210,384,20,100) ;
  rect(257,385,20,100) ;

fill('brown') ;
ellipse(228, 120, 50, 50);
ellipse(264, 120, 50, 50);
fill('white') ;
ellipse(228, 120, 20, 20);
ellipse(264, 120, 20, 20);

  if (mouseIsPressed) {
    //stuff that shows when the mouse is pressed
    fill('brown') ;
    ellipse(228, 120, 50, 50);
    ellipse(264, 120, 50, 50);

  }


  fill(0)
  textSize(40) ;
  text(mouseX + "," + mouseY, 250,250) ;
}


function mouseReleased() {
  console.log(mouseX +", " + mouseY) ;
}
