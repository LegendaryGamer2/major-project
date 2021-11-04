function Wood(x, y, w, h, img, health){
  
  this.body = Bodies.rectangle(x, y, w, h, {
    // the properties of the wood being created
    friction: 1,
    density: 100,
    // inertia: 0, 
    isStatic: false,
  }
  );
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.img = img;
  this.health = health;
  World.add(world, this.body);

  this.removal = function(){// removes the object
    World.remove(world, this.body);
  };

  this.hit = function(){// checks if the piece of wood has been hit
    let pos = this.body.position;
    return mouseX >= pos.x - this.w/2 && mouseX <= pos.x + this.w/2 && mouseY >= pos.y - this.h/2 && mouseY <= pos.y + this.h/2;
  };

  this.show = function() {//displays the object
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