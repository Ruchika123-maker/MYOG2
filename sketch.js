const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var bgImg;

function preload(){

  bgImg = loadImage("images/bg.jpg")
}

function setup() {
  createCanvas(1500,500);
  engine = Engine.create();
	world = engine.world;
}

function draw() {
  background(bgImg); 
  Engine.run(engine);
}