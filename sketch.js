const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1400,900);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600,850,50,50);
    box2 = new Box(800,850,50,50);
    ground = new Ground(700,height,1400,20);
    bird = new Bird(200, 300);
    pig1 = new Pig(700, 850);
    pig2 = new Pig(700, 750);
    log1 = new Log(700, 800, 300, 0.5*PI);
    log2 = new Log(700, 700, 300, 0.5*PI);
    log3 = new Log(670, 690, 120, 0.25*PI);
    log4 = new Log(720, 690, 120, -0.25*PI);
    box3 = new Box(600, 750, 50, 50);
    box4 = new Box(800, 750, 50, 50);
    box5 = new Box(700, 670, 50, 50);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    bird.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();

}