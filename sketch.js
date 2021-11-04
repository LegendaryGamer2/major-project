// Angry Bird Fan Game
// Tamoor Ali Ahmed
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let ground;
let pig;
let wood;
let engine;
let world;
let vector;
let pigs = [];
let boxes = [];
let spot1, spot2, spot3, spot4;
let level = 0;
let boxXY;
let step = 0;
let switchOn = 0;
let counter = 0;
let hit = false;
let tapped = 0;
let tries = 2;
let backdrop;
let sizing;

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
  backdrop = loadImage("assets/backgroundpic.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // setting up all the variables needed
  engine = Engine.create();
  world = engine.world;
  vector = Vector.create(width/2, height/2);
  Engine.run(engine);
  ground = Bodies.rectangle(0, height-20, windowWidth * 2, 10, {isStatic: true});
  World.add(world, ground);
  if (level === 1){ // activates function 
    building();
    building();
  }
}


function windowResized(){
  setup();
}

function mouseClicked(){// your number of tries to defeat all the pigs
  for(let y = 0; y < boxes.length; y++){
    if (boxes[y].hit() && tries !== 0){
      console.log("hit");
      boxes[y].removal();
      boxes.splice(y, 1);
      tries -= 1;
    }
  }
}

function keyPressed(){// turns on level 1
  if (keyCode === 32 && switchOn === 0){
    level = 1;
    setup();
    switchOn = 1;
  }
}

function draw() {
  background(backdrop);
  if (level === 0){
    sizing = windowWidth/30;
    textSize(sizing);
    text("Angry Birds Fan Game", width/3, windowHeight/5);
    sizing = windowWidth/60;
    textSize(sizing);
    text("You must make the blocks of wood fall on the pig or squish it to win the game and to start press spacebar" , 0 + width/10, windowHeight /3);
  }
  else if (level === 2){
    sizing = windowWidth/60 * 4;
    textSize(sizing);
    text("You Win", windowWidth/2 - sizing, windowHeight/2);
  }
  // representation of the ground
  rect(0, height-25, width, 10);
  // showing the pigs and pieces of wood
  for (let i = 0; i < pigs.length; i++){
    pigs[i].show();
    if (pigs[i].kill()){
      pigs.splice(i, 1);
    }
    
  }
  for (let i = 0; i < boxes.length; i++){
    boxes[i].show();  
  }
  if (pigs.length <= 0){// removes everything and places win screen
    for(let y = 0; y < boxes.length; y++){
      boxes[y].removal();
      boxes.splice(y, 1);
      level = 2;
    }
  }
}
