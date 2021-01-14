//namespacing
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var box1,box2,box3,box4,box5,ground;
var pig1,pig2,log1,log2,log3,log4,bird1;
function setup() {
 createCanvas(1200,400);
 engine=Engine.create();
  world=engine.world;

 box1= new Box(700,320,70,70);
 box2= new Box(920,320,70,70);
 pig1=new Pig(810,320);
 pig2=new Pig(810,250);
 ground=new Ground(600,395,1200,10);
 
log1=new Log(810,280,300,PI/2);
log2=new Log(810,180,300,PI/2);
box3=new Box(700,250,70,70);
box4=new Box(920,250,70,70);
box5=new Box(810,150,70,70);
log3=new Log(760,120,160,PI/7);
log4=new Log(870,120,160,-PI/7);
bird1=new Bird(100,100);
}

function draw() {
  background(0);  
  Engine.update(engine);
 box1.display();
 box2.display();
 ground.display();
pig1.display();
log1.display();
box3.display();
box4.display();
pig2.display();
log2.display();
box5.display();
log3.display();
log4.display();
bird1.display();
}