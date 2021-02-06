const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var ninja,ninjaImage
var backgroundImage
var engine, world;
var block1,block2;

function preload(){
  backgroundImage= loadImage("images/back.gif");
 // ninjaImage=loadImage("images/ninja 2.png");
}



function setup(){

createCanvas(900,600);
engine = Engine.create();
world = engine.world;

block1=createSprite(350,400,200,10);
block1.shapeColor="pink";
block2=createSprite(400,400,200,10);
block2.shapeColor="pink";

//ninja=createSprite(370,395,30,30)
//ninja.addImage(ninjaImage);


}
function draw(){
background(backgroundImage);
Engine.update(engine);



 drawSprites();
}