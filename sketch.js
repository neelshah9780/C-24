
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3;
var ground,ball;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	box1=new Box(1000,560,300,40);
	World.add(world,box1);
	
	box2=new Box(845,485,40,180);
	World.add(world,box2);

	box3=new Box(1155,485,40,180);
	World.add(world,box3);
	
	ground=new Ground(600,590);
	World.add(world,ground);
	
	var ball_options ={ restitution: 1.0 }
    ball = Bodies.circle(150,100,20, ball_options);
    World.add(world,ball);

	Engine.run(engine);
}


function draw() {
	background(0);
  rectMode(CENTER);
  Engine.update(engine);
  
  keyPressed();

  box1.display();
  box2.display();
  box3.display();
  ground.display();
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20,20);

  drawSprites();
 
}

function keyPressed() {
	if (keyCode=== UP_ARROW) {
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:80,y:-85});
	}
	}

