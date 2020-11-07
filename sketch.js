const Engine= Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground, ball
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world= engine.world;
  var groundOptions= {
    isStatic:true
  }
  ground = Bodies.rectangle(200, 350, 400, 30, groundOptions);
World.add(world,ground);
console.log(ground);
 var ballOptions = {
   restitution:0.1
 }
 ball = Bodies.circle(200,200,10,ballOptions)
 World.add(world, ball)
}


function draw() {
  background(0); 
  Engine.update(engine);
 rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,30); 
  ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,10,10)
}
