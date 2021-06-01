
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground, paper
var bin1, bin2, bin3

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	//paper = new Paper(300,300,4)

	bin1 = new Dustbin(600,650,10,50)
	bin2 = new Dustbin(630,675,60,10)
	bin3 = new Dustbin(660,650,10,50)

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  function keyPressed() {
	if (keyCode === UP_ARROW) {
	 Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x:85, y:-85});
	 }
   }
   

  drawSprites();
 
}



