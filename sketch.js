
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
var ground1;
var dust1,dust2, dust3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;
	paper1 = new paper(200,50,50);
	ground1= new Ground(600,height,1200,20);
	dust1=new dustbin(700,360,10,80);
	dust2=new dustbin(900,360,10,80);
	dust3= new dustbin(800,390,200,20);
	
  
}


function draw() {
 
  background("pink");
  paper1.display();
  ground1.display();
  dust1.display();
  dust2.display();
  dust3.display();
  Engine.run(engine);

 
}
function keyPressed(){
	if (keyCode== UP_ARROW){
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
	}
}



