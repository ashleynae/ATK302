var cars = [];
var frogPos;
var myState = 0 ;
var maxCars = 10 ;
var maxTimer = 12*60 ;
var timer = maxTimer ;
var song1 ;
var pacman;
var icecream;

function preload() {
song1 = loadSound("Assets/pacman.mp3") ;

}

function setup() {
  createCanvas(800, 800);

//spawn cars
  for (var i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

frogPos = createVector(400, height-100) ;

textAlign(CENTER) ;
imageMode(CENTER);
pacman = loadImage("Assets/pacman3.png") ;
icecream = loadImage("Assets/icecream4.png") ;
}

function draw() {

  switch(myState) {

    case -1:
    song1.loop();   //this is what starts the sound
    myState = 0;
    break;

    case 0: //menu
    background('#a84a07') ;
    rect(100, 100, 100, 100) ;
    fill('green') ;
    rect(600, 100, 100, 100) ;
    fill('purple') ;
    rect(100, 600, 100, 100) ;
    fill('blue') ;
    rect(600, 600, 100, 100) ;
    fill('white') ;
    textSize(36) ;
    text("Welcome to my game! Click to proceed", width/2, height/2) ;
    song1.play();
    break ;

    case 1: // game state
    game();

   timer = timer - 1 ;
   if (timer <= 0) {
     timer = maxTimer ;
     myState = 3 ;
   }

    break;

    case 2: //win
    background('yellow') ;
    text("YAY YOU WON!", width/2, height/2)
    song1.stop();
    break ;

    case 3: // lost
    background('purple') ;
    text("OOPS YOU LOST!", width/2, height/2)
    song1.stop();
    break ;
  }


}


function mouseReleased() {
  switch(myState) {
    case 0:
    myState = 1 ;
    break ;

    case 2: // They Won!
// reset timer

timer = maxTimer ;
    // respawn cars
    cars = [] ;
    for (var i = 0; i < maxCars; i++) {
      cars.push(new Car());
    }

    myState = 0 ;
    break ;

    case 3: // They Lost!
    // reset timer
    timer = maxTimer ;


    // respawn cars
    cars = [] ;
    for (var i = 0; i < maxCars; i++) {
      cars.push(new Car());
    }

    myState = 0 ;
    break ;
  }
}


function game() {
  background('#0bd94c');

for (var i = 0; i < cars.length; i++) {
  cars[i].display();
  cars[i].drive();
  if (cars[i].pos.dist(frogPos) <50) {
    cars.splice(i, 1) ;
  }
}

if (cars.length == 0) {
  myState = 2 ;
}

// frog
//fill('green') ;
//ellipse(frogPos.x, frogPos.y, 50, 50);
image(pacman, frogPos.x, frogPos.y);
checkForKeys();

}




function checkForKeys() {
if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5 ;
if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5 ;
if (keyIsDown(UP_ARROW)) frogPos.y -= 5 ;
if (keyIsDown(DOWN_ARROW)) frogPos.y += 5 ;
}






//Our Car Class!!
function Car() {
  // attributes
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);

  //methods
  this.display = function() {
    //fill(this.r, this.g, this.b);
    //rect(this.pos.x, this.pos.y, 30, 30);
    image(icecream, this.pos.x, this.pos.y, 50, 50) ;
  }

  this.drive = function() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > width) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}
