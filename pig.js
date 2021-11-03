function Pig(x, y, r, img){
  this.body = Bodies.circle(x, y, r, {
    // the properties of the pig being created
    friction: 1,
    force: { x: 0, y: 10},
    inertia: 0, 
    density: 10,
    isStatic:false,
  }
  );
  this.r = r;
  this.x = x;
  this.y = y;
  this.img = img;
  World.add(world, this.body);

  // this.forcedown = function(){
  //   Body.applyForce(this.body, { x: 0, y: 0}, { x: 0, y: 0.001});
  // };

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