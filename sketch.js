// Angry Bird Game
// Tamoor Ali Ahmed
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let pig;
let Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;


function preload(){
  pig = loadImage("assets/pig.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  imageMode(CENTER);
  image(pig, width/1.5, height/2, 100, 100);
}
