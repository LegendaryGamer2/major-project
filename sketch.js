// Angry Bird Game
// Tamoor Ali Ahmed
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let pig;
let slingshot;


function preload(){
  pig = loadImage("assets/pig.png");
  slingshot = loadImage("assets/slingshot.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  imageMode(CENTER);
  image(pig, width/1.5, height/2, 100, 100);
  image(slingshot, width/2, height/2, 82.75, 156.5);
}
