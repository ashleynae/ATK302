var mic;
var vol;
var y = 0 ;

function setup() {
  createCanvas(800, 800);

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background('pink');

push() ;
translate(y, 0) ;
//put your avatar here
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
pop() ;


  vol = mic.getLevel(); // level is between 0 and 1
  vol = vol * 100; // you may need to change this

  if (vol > 3) {
    // do something
    y++ ;

  }


  textSize(18);
  text("Click the screen first.  My volume is " + vol, 80, 400);


}


// you need to click the screen before the mic input will work.
function touchStarted() {
  getAudioContext().resume();
}
