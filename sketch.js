const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ground;

function setup() {
  var canvas = createCanvas(400,400);

  engine = Engine.create(); // creating the physics engine for the program and assigning the value in engine variable
  world = engine.world; // assigning the value of variable engine with the world
  

  var ground_options ={
    isStatic:true
  }
  ground = Bodies.rectangle(200,390,200,20,ground_options);
  World.add(world,ground);



 var object_options = {
   restitution: 3.0
 }
  object = Bodies.rectangle(200,100,50,70,object_options);
  World.add(world,object);

  
}

function draw() {
  background("black");  
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y, 50,70);
  rect(ground.position.x,ground.position.y,400,20)
  
}