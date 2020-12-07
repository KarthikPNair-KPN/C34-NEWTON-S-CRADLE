
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5;
var sling1, sling2, sling3, sling4, sling5;
var canvasmouse;

function setup() {
	canvas = createCanvas(windowWidth/2, windowHeight/1.5);
	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity();
	let options = {
		mouse:canvasmouse
	}
	mConstraint = MouseConstraint.create(engine, options);
	World.add(world,mConstraint);

	//Create the Bodies Here.
	pendulum1 = new Pendulum(300,500, "black");
	pendulum2 = new Pendulum(360,500, "black");
	pendulum3 = new Pendulum(420,500, "black");
	pendulum4 = new Pendulum(480,500, "black");
	pendulum5 = new Pendulum(540,500, "black");

	
	sling1 = new Sling(pendulum1.body, { x: 360, y: 250 }); 
	sling2 = new Sling(pendulum2.body, { x: 410, y: 250 }); 
	sling3 = new Sling(pendulum3.body, { x: 460, y: 250 }); 
	sling4 = new Sling(pendulum4.body, { x: 510, y: 250 }); 
	sling5 = new Sling(pendulum5.body, { x: 560, y: 250 }); 

	Engine.run(engine);
  
}


function draw() {
	background(0);
	textSize(40);
	textFont("Impact");
	fill("white");
	text("Newton's Cradle", 350,100)
	rectMode(CENTER);
	Engine.update(engine);


  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();


  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

}
  function mouseDragged(){
	  Matter.Body.setPosition(pendulum1.body, {x: mouseX, y:mouseY})
  }