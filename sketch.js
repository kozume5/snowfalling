const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var bgimg
var snowflake1
var bg
var snowflake

function preload(){
bgimg = loadImage("snow3.jpg")


}





function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
     snowflake = new Snowflakes(200,200,100,100)





}

function draw() {
  background(bgimg);
  Engine.update(engine);
  snowflake.display()  
  drawSprites();
}