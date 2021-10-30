function Bird(x, y, r, img){
  this.body = Bodies.circle(x, y, r, {
  // friction is how easily it moves and force is how fast it is being moved in a direction between -1 and 1 and anymore than 2 friction air crashes the browser
    friction: 1,
    force: { x: 0.1, y: 0},
    frictionAir: 0,
    // restitution: 1.5,
    inertia: 0, 
    density: 100,
  }
  );

  this.x = x;
  this.y = y;
  this.r = r;
  this.img = img;
  World.add(world, this.body);
  
  let speedx = -0.0009;

  this.slowDown = function(){
    this.body.force = {x: -0.0009 , y: 0.0006};

  };
  this.show = function() {
    let pos = this.body.position;
    let angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.img, 0, 0, this.r * 2, this.r * 2); 
    pop();
  };
}