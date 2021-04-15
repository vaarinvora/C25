
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var myengine, myworld;
function setup(){
  var canvas = createCanvas(1200,400);
  myengine = Engine.create();
  myworld = myengine.world;

  object1=Bodies.rectangle(200,100,50,50)
  object2=Bodies.circle(300,200,50)
  World.add(myworld,object1)
  World.add(myworld,object2)
  console.log(object1)
}
function draw()
{
  background(0);
  Engine.update(myengine)
  rectMode(CENTER);
    rect(object1.position.x,object1.position.y,50,50);


    circle(object2.position.x,object2.position.y,50);
}


