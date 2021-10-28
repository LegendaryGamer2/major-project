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
let ground;
let i = 0;
let pig;
let wood;
let rotation = 0;
let moveRight = false;
let engine;
let world;
let vector;
let pigs = [];
let boxes = [];

let Engine = Matter.Engine,
  World = Matter.World,
  Vector = Matter.Vector,
  Bodies = Matter.Bodies,
  Body = Matter.Body,
  Composites = Matter.Composite,
  MouseConstraint=Matter.MouseConstraint,
  Mouse= Matter.Mouse;
function preload(){
  pig = loadImage("assets/pig.png");
  wood = loadImage("assets/wood.png");
}

function rolling(x, y, img, rotated){
  translate(x, y);
  rotate(PI / 180 * rotated);
  imageMode(CENTER);
  image(img, x - x, y - y, 30, 30);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  vector = Vector.create(width/2, height/2);
  Engine.run(engine);
  let options = {
    isStatic: true
  };
  ground = Bodies.rectangle(0, height-20, windowWidth * 2, 10, options);
  World.add(world, ground);
}

function mousePressed(){
  if (key === "e"){
    pigs.push(new Pig(mouseX, mouseY, 30, pig));
  }
  else if (key === "q"){
    boxes.push(new Box(mouseX, mouseY, 50, 50, wood));
  }
}

function keyPressed(){
  moveRight = !moveRight;
}

function windowResized(){
  setup();
}

function draw() {
  background(255);
  // representation of the ground
  rect(0, height-25, width, 10);
  for (let i = 0; i < pigs.length; i++){
    pigs[i].show();
    
  }
  for (let i = 0; i < boxes.length; i++){
    boxes[i].show();

    boxes[i].slowDown();
  }
  push();
  rolling(pigX, pigY, pig, rotation);
  rotation += 1;
  pop();
}
