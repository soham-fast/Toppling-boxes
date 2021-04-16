const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground();
    
    box= new Box(400,200,50,80);
    box1= new Box(420,50,50,80);


    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
  box.display();
    box1.display();
}