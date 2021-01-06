
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground , Ball,ball1,wall1,wall2,wall3;
function preload()
{
//	Ball = loadImage("paper1.png")
	
}

function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;
//image(100,height-200,20,20)
	//Create the Bodies Here.
	ground = new Ground(400,height,800,20);
	
			
	ball1=new ball(50,50,20,20); 
	text(mouseX+","+mouseY, mouseX,mouseY) ;
	Engine.run(engine);
	wall1=new distbin (630,685,100,10)
	wall2=new distbin (580,655,10,50)
	wall3=new distbin (680,655,10,50)
}


function draw() {

  rectMode(CENTER);
  background(0);
  ground.display();
  ball1.display();
  wall1.display();
  wall2.display();
  wall3.display();

  text(mouseX+","+mouseY, mouseX,mouseY)
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:10,y:-10})
	
	}
}



