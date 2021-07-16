const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var world, engine
var stand, ball, slingshot, poly_img;

function preload() {
  poly_img= loadImage("polygon.png")
}

function setup() {
  createCanvas(800, 400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine)

  stand = new Ground(390, 300, 250, 10)
  //first level
  block1 = new Box(300, 265, 30, 40);
  block2= new Box(330, 265, 30, 40);
  block3 = new Box(360, 265, 30, 40);
  block4 = new Box(390, 265, 30, 40);
  block5 = new Box(420, 265, 30, 40);
  block6 = new Box(450, 265, 30, 40);
  block7 = new Box(480, 265, 30, 40);


  //second level
  block8 = new Box(330, 235, 30, 40);
  block9 = new Box(360, 235, 30, 40);
  block10 = new Box(390, 235, 30, 40);
  block11 = new Box(420, 235, 30, 40);
  block12 = new Box(450, 235, 30, 40);

  // third level
  block13 = new Box(360, 195, 30, 40);
  block14 = new Box(390, 195, 30, 40);
  block15 = new Box(420, 195, 30, 40);
  //top level
  block16 = new Box(390, 165, 30, 40);

   ball = Bodies.circle(50, 200, 20)
  World.add(world, ball)

   slingshot= new SlingShot(this.ball,{x:100,y:200})

}

function draw() {
  background("#67f5ba");
   textSize(20);
   fill("lightyellow");
   text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks", 100, 30);
  stand.display()
  fill("lightblue")
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("lightpink")
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill("lightgreen")
  block13.display();
  block14.display();
  block15.display();

  fill("lightseagreen")
  block16.display();

  imageMode(CENTER);
  image(poly_img,ball.position.x, ball.position.y,40,40)
  slingshot.display()
}

function mouseReleased() {
  slingshot.fly()
}

function mouseDragged() {
  Matter.Body.setPosition(this.ball, {
    x: mouseX,
    y: mouseY
  });
}