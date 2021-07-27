const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
var ground,ball;

var engine,world;
var box1;

function setup() {
  createCanvas(800,400);

  engine=Engine.create();
  world=engine.world;

  var boxoption={isStatic:true};
  box1=Bodies.rectangle(100,200,50,50,boxoption);
  World.add(world,box1);

  ground= Bodies.rectangle(400,400,800,20,boxoption);
  World.add(world,ground);

  var balloption={restitution:0.8}
  ball= Bodies.circle(300,30,25,balloption);
  World.add(world,ball)
}

function draw()
{
  background(255,255,255);  
  Engine.update(engine);

  rectMode(CENTER);
  rect(box1.position.x,box1.position.y,50,50);

  rect(ground.position.x,ground.position.y,800,20);

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,25,25)

  drawSprites();
}