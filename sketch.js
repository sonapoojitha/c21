
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var angle=60


function setup() {
  createCanvas(400,400);
 
  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  
//create a ground

//add to world
  ground=Bodies.rectangle(200,380,400,20,ground_options);
  World.add(world,ground);
  ball = Bodies.circle(150,10,20,ball_options);
  World.add(world,ball);
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background("white");
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  //write a rectangle function to display ground.
 
 Matter.Body.rotate(ground,angle)
 push();
translate(ground.position.x,ground.position.y)
rotate(angle)
rect(0,0,100,10)
pop();
  angle += 0.1;
}

