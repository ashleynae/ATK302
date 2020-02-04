var sel ;

function preload() {
  sel = loadFont('assets/Selfila.otf');  // find an otf or ttf
}

function setup() {
  //put setup code here
  createCanvas(800, 800) ;
}
function draw() {
  fill('#ED225D');   // SETS the color
  textFont(sel, 28);  // SETS the font
  textSize(36);	// SETS the size of the font
  text('HELLO WORLD', 100, 100); // DISPLAYS TEXT WITH THE FONT
}
