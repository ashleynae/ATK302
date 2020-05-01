var namesArray = [];

function setup() {

  // Tabletop stuff, for getting google spreadsheet data in.
  let url = '1c86ZZltKIhAeeg2P_hcLTDrcPOrfoDNtOUhNg1u1rIk'; // this is KEY of the URL from the sheet
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called namesArray
  for (let i = 0; i < data.length; i++) {
    namesArray.push(new Circle(data[i].Name, data[i].Dessert));
  }

}


function draw() {
  background('#4020f5');

  // // iterate through the namesArray and display the objects!
  for (let i = 0; i < namesArray.length; i++) {
    namesArray[i].display();
    namesArray[i].drive();
  }

}


// my circle class
function Circle(myDessert, myName) {
  this.pos = createVector(random(width), random(height));
  this.dessert = myDessert;
  this.name = myName;
  this.vel = random(3);
  this.mySize = random(24, 60);


  this.display = function() {

    // put an ellipse here
    //fill('#fc30f2')
  //rect(this.pos.x, this.pos.y, 50, 30) ;
  textSize(this.mySize) ;
  fill('#fc30f2') ;
  text(this.dessert, this.pos.x, this.pos.y) ;
  text(this.name, this.pos.x, this.pos.y-40) ;

  }

this.drive = function() {
  this.pos.x = this.pos.x + this.vel ;
  if(this.pos.x > width) this.pos.x = -209 ;
}

}
