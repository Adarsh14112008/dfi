class ball{
  constructor(x,y,width,height) {
    var options = {
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.image = loadImage("paper1.png");
    
  }
  display(){
    push();
    var pos =this.body.position;
    var angle=this.body.angle;
    rectMode(CENTER);
    translate(pos.x,pos.y);
    rotate(angle);
    //image(this.image, 0, 0);
    rect(0,0, this.width, this.height);
    pop();
    
  }
};