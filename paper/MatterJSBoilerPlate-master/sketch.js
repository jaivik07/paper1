
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);

	box=new Ground (600,665,200,10)
	

	boxside=new Ground(500,620,10,100)
	//boxside.shapeColor=color("red")

	boxside1=new Ground(700,620,10,100)
	//boxside1.shapeColor=color("red")

   
    paper1 = new paper(85,-85,10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  ground.display()
  box.display()
  boxside.display()
  boxside1.display()
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === 39) {
   
		Matter.Body.applyForce(paper1.body,paper1.body. position,{x:15,y:-15});
	 }
   }
   

