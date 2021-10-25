// Angry Bird Game
// Tamoor Ali Ahmed
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let pigX = 200;
let pigY = 200;
let pigX2 = 200;
let pigY2 = 400;

let i = 0;
let pig;
let rotation = 0;
let moveRight = false;



let Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;


function preload(){
  pig = loadImage("assets/pig.png");
}

class Pig{
  constructor(x, y, w, h, image, rotation){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.a = 0;
    this.image = image;
    this.rotation = rotation;
  }
}


function rolling(x, y, img, rotated){
  translate(x, y);
  rotate(PI / 180 * rotated);
  imageMode(CENTER);
  image(img, x - x, y - y, 30, 30);


  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function keyPressed(){

  moveRight = !moveRight;
 

}


function draw() {
  background(255);
  rolling(pigX, pigY, pig, rotation);

  rotation += 1;
  
  if (moveRight === true){
    pigX +=1;
    i += 1;
    if (i === 200){
      moveRight = false;
    }
  }

}
