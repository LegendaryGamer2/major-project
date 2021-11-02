function Pig(x, y, r, img){
  this.body = Bodies.circle(x, y, r, {
    // the properties of the pig being created
    friction: 1,
    force: { x: 0, y: 1 },
    frictionAir: 1,
    // restitution: 1.5,
    inertia: 0, 
    density: 10,
    isStatic:true,
  }
  );
  this.r = r;
  this.x = x;
  this.y = y;
  this.img = img;
  World.add(world, this.body);

  this.fall = function(){
    Body.setStatic(this.body, false);
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