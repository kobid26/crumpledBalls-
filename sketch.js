
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObject;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	Paper= new paper(200,200,20,20)
	ground = new Ground(600,height,1200,20)

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);
  
  drawSprites();
 Paper.display();
 ground.display();
}

function keyPressed(){

     if (keyCode === UP_ARROW){
		 Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
	 }

}

