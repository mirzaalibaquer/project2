var car,wall;
var speed,hight;
speed=random(55,90)
hight=random(400,1500)

function setup() {
  createCanvas(1200,800);
  car=createSprite(500,200,50,50);
car.shapeColor="green";
car.debug=true;
wall=createSprite(1500,200,60,hight/2);
wall.shapeColor="red";
wall.debug=true;

}

function draw() {
  background(0,0,0);  
  car.x=World.mouseX;
 car.y= World.mouseY;
  if(wall.x (car.width.wall.width)2)
  {
car.velocityX=0;
var deformation=0.5 . weight. speed. speed/22509;
if(deformation>180)
{
car.shapeColor=color(255,0,0);
}
if(deformation<100)
{
  car .shapeColor=color(0,255,0);
}
  }
  else {
  {
    car.shapeColor="green";
    wall.shapeColor="red";
  }
  drawSprites();
}