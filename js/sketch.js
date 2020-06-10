const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var paper,ground,dustbin1,dustbin2,dustbin3;


function setup(){
    
    var canvas = createCanvas(800,400);
    
    engine = Engine.create();
    world = engine.world;
    paper = new Paper(80,200,50,50);
    ground = new Ground(400,370,800,10);
    dustbin1 = new Dustbin(595,300,20,140);
    dustbin2 = new Dustbin(655,362,100,18);
    dustbin3 = new Dustbin(715,300,20,140);
   
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    paper.display();
    dustbin1.display();
    dustbin2.display();
    dustbin3.display();

}

function keyPressed(){
    if(keyCode === UP_ARROW){
     //console.log(trash);
        Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-180})
    }
}