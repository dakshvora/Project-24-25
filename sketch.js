
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var dl,dr,db;
var b;
var dimage;
function preload()
{
	dimage= loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

ground = new Ground(400,780,800,40);

dl = new Dustbin(480,660,40,200);
dr = new Dustbin(720,660,40,200);
db = new Dustbin(600,740,200,40);

b = new Ball(50,750,50);


Engine.run(engine);
  
}


function draw() {
  imageMode(CENTER);
  background("white");
 
ground.display();

dl.display();
dr.display();
db.display();
b.display();
image(dimage, 600,660,250,200)
}


function keyPressed(){

	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(b.body, b.postion, {x:90, y:-150});
	}
}
