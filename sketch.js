const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint;

var engine,world;
var base;
var box1,bo2,box3,box4,box5,box6,box7,box8,box9,box10;
var polygon,slingshot;
var score=0;
function setup (){
    createCanvas(1200,600);

    engine = Engine.create();
    world = engine.world;
    base= new Ground(600,350,300,20);

    box1 = new Box(600,320,40,40);
    box2= new Box(640,320,40,40);
    box3 = new Box(680,320,40,40);
    box4 = new Box(560,320,40,40);
    box5 = new Box(620,280,40,40);
    box6 = new Box(580,280,40,40);
    box7 = new Box(660,280,40,40);
    box8 = new Box(600,240,40,40);
    box9 = new Box(640,240,40,40);
    box10 = new Box(620,200,40,40);

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingshot = new SlingShot(this.polygon,{x:100,y:200});
     text("SCORE :"+score,750,40);
}
function draw (){
    background("white");
base.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
slingshot.display();
ellipseMode(RADIUS);


ellipse(polygon.position.x,polygon.position.y,40,40);

box1.score();
box2.score();
box3.score();
box4.score();
box5.score();
box6.score();
box7.score();
box8.score();
box9.score();
box10.score();

}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}    

function mouseReleased(){
    slingshot.fly();
}