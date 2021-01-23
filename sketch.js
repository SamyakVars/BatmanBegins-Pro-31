const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var drops = [];
var umbrella;
var thunder;

function preload(){
    
}

function setup(){
   createCanvas(800, 1200)

   engine = Engine.create();
   world = engine.world;

   umbrella = new Umbrella(400, 800)
   thunder = new Thunder()

   for(var i = 0; i <= 400; i++){
        drops[i] = new Drop(random(0, 800), random(0, 800))
   }

    
}

function draw(){

    background(0)
    Engine.update(engine); 
    
    for(var d = 0; d <= 200; d++){
        drops[d].display()
        drops[d].update()
    }
    
    rect(0, 1150, width, 100)

    umbrella.display()
    thunder.display()
}   

