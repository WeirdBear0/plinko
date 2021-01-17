const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var ground, plinko;
var plinkoArray = [];
var particleArray = [];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground=new Ground(240,800,width,20);
  ground1 = new Ground(240,650,20,300);
  ground2 = new Ground(160,650,20,300);
  ground3 = new Ground(320,650,20,300);
  ground4 = new Ground(400,650,20,300);
  ground5 = new Ground(80,650,20,300);
  ground7 = new Ground(480,650,20,300);
  ground6 = new Ground(0,650,20,300);
  // plinko = new Plinko(100,100,20);

  for(var j = 40;j<=width;j=j+50){
    plinkoArray.push(new Plinko(j,75,20));
  }

}

function draw() {
  background(0,0,0);  
  ground.display();
  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  ground5.display();
  ground6.display();
  ground7.display();
  for( var j = 0; j<plinkoArray.length; j++){
    plinkoArray[j].display();
  }
  // plinko.display();

}