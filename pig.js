function Pig(x, y, w, h, img){
  this.body = Bodies.rectangle(x, y, w, h);
  this.w = w;
  this.h = h;
  this.x = x;
  this.y = y;
  this.img = img;
  World.add(world, this.body);

  this.show = function() {
    let pos = this.body.position;
    let angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);

    image(this.img, 0, 0, this.w, this.h); 
    pop();
  };
}