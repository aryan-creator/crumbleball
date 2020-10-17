
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground=new Ground (800,650,1600,10)
  paper=new Paper (100,630,30)
  binbass =new Bin(1200,630,200,20)
  binbass =new Bin(1100,530,20,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display ()
  paper.display ()
  binbass.display()
  binleft.display()
  drawSprites();
 
}



