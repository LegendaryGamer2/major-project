// Angry Bird Game
// Tamoor Ali Ahmed
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let pigX = 100;
let pigY = 100;
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
let spot1, spot2, spot3, spot4;
let level = 1;
let boxXY;
let step = 0;
let mConstraint;


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
  slingShot = loadImage("assets/slingshot.png");
}

function rolling(x, y, img, rotated){
  translate(x, y);
  rotate(PI / 180 * rotated);
  imageMode(CENTER);
  image(img, x - x, y - y, 30, 30);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // if (windowWidth > windowHeight){
  //   createCanvas(windowHeight, windowHeight);
  // }
  // else {
  //   createCanvas(windowWidth, windowWidth);
  // }
  engine = Engine.create();
  world = engine.world;
  vector = Vector.create(width/2, height/2);
  Engine.run(engine);
  ground = Bodies.rectangle(0, height-20, windowWidth * 2, 10, {isStatic: true});
  World.add(world, ground);
  World.add(world, ground);
  let canvasMouse = Mouse.create(canvas.elt);
  canvasMouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasMouse

  };
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);
  building();
  building();
}

function mousePressed(){
  if (key === "b"){
    boxes.push(new Bird(mouseX, mouseY, 50, wood, true));
  }
}

function building(){
  if (step === 0){
    boxXY = giveValues("wood");
    for(let y = 0; y < boxXY.length; y++){
      for(let x = 0; x < boxXY[y].length; x++){
        if(x === 0){
          spot1 = boxXY[y][x];
        }
        else if(x === 1){
          spot2 = boxXY[y][x];
        }
        else if(x === 2){
          spot3 = boxXY[y][x];
        }
        else if(x === 3){
          spot4 = boxXY[y][x];
        }
      }
      boxes.push(new Wood(spot1, spot2, spot3/2, spot4/2, wood, false));
    }
    step = 1;
  }
  else if (step === 1){
    boxXY = giveValues("pig");
    for(let y = 0; y < boxXY.length; y++){
      for(let x = 0; x < boxXY[y].length; x++){
        if(x === 0){
          spot1 = boxXY[y][x];
        }
        else if(x === 1){
          spot2 = boxXY[y][x];
        }
        else if(x === 2){
          spot3 = boxXY[y][x];
        }
      }
      pigs.push(new Pig(spot1, spot2, spot3, pig));
    }
    step = 2;
  }
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
    pigs[i].fall();
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
