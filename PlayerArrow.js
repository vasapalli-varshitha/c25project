class PlayerArrow {
    constructor(x, y, width, height) {
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
        isStatic: true
      };
      this.width=width;
      this.height=height

    this.body = Bodies.rectangle(x, y,this.width, this.height, options);

    this.image = loadImage("./assets/playerArrow.png");
    World.add(world, this.body);
    }

    shoot(playerArcher) {
      var velocity = p5.Vector.fromAngle(playerArcher);
      velocity.mult(20);
      Matter.Body.setStatic(this.body, false);
      Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
    
    }

    display() { 
        var pos = this.body.position;
        var angle = this.body.angle;
    
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}