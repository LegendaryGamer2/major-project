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
let engine;
let world;
let ground;
let boxes = [];

let Engine = Matter.Engine,
  Runner = Matter.Runner,
  World = Matter.World,
  Bodies = Matter.Bodies;

function preload(){
  pig = loadImage("assets/pig.png");
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
  Engine.run(engine);
  let options = {
    isStatic: true
  };
  ground = Bodies.rectangle(0, height-20, windowWidth * 2, 10, options);
  World.add(world, ground);
}

function mousePressed(){
  boxes.push(new Pig(mouseX, mouseY, 50, 50, pig));
}

function keyPressed(){
  moveRight = !moveRight;
}

function draw() {
  background(255);

  rect(0, height-20, width, 10);
  for (let i = 0; i < boxes.length; i++){

    boxes[i].show();
  }
  if (moveRight === true){
    pigX +=1;
    i += 1;
    if (i === 200){
      moveRight = false;
    }
  }
  push();
  rolling(pigX, pigY, pig, rotation);
  rotation += 1;
  pop();
}
