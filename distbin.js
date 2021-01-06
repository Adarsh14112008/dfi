class distbin {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image=loadImage("dustbingreen.png"); 
      this.image .scale=0.1
    }
    display(){
      push();
      var pos =this.body.position;
      rectMode(CENTER);
      var pos =this.body.position;
    var angle=this.body.angle;
      fill("brown");
      image(this.image, 600, 607);
      
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  }