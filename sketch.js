// Angry Bird Game
// Tamoor Ali Ahmed
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let pig;
let rotation;
let Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;


function preload(){
  pig = loadImage("assets/pig.png");
}

class Pig{
  constructor(x, y, w, h, angle, image){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.a = angle;
    this.image = image;


  }
  display(){


  }

}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function rotating(object, rotation){
  push();
  translate(width/2, height/2);
  rotate(rotation);
  imageMode(CENTER);
  object;
  
  pop();

}



function draw() {
  background(255);
  let box1 = rect(0, 0, 150, 150);
  rotating(box1, 50);
 


}
