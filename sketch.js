const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground;

function setup() {
  canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var box_options = { isStatic : true };
  
  box = Bodies.rectangle(200,200,100,100,box_options);
 
  World.add(world,box);

}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER) ;
  rect(box.position.x,box.position.y,100,100);

  
}