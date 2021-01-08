
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
const Constraint= Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Engine.run(engine);
	

	ball1= new ball(400,600,20)
	ball2= new ball(450,600,20)
	ball3= new ball(500,600,20)
	ball4= new ball(550,600,20)
	ball5= new ball(600,600,20)
	bar1= new bar(500,100,300,20)
	chain1=new sling(ball1.body,{x:400,y:100})
	chain2=new sling(ball2.body,{x:450,y:100})
	chain3=new sling(ball3.body,{x:500,y:100})
	chain4=new sling(ball4.body,{x:550,y:100})
	chain5=new sling(ball5.body,{x:600,y:100})

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
	}
	  });
  
	 
	 Render.run(render);

}


function draw() {
  rectMode(CENTER);
  background("gray");
  ball1.display();
  bar1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-35,y:-85})
	}
}