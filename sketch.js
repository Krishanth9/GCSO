var car,wall,deformation
var speed,weight


function setup() {
  createCanvas(800,400);
  wall=createSprite(760,200, 15,80);
  car=createSprite(100, 200, 10, 10);
  speed=random(50,100)
  weight=random(400,1200)
  car.velocityX=speed;
}

function draw() {
  background(255,255,255);  
  deformation=0.5*weight*speed*speed/22500
  if(wall.x-car.x<wall.width/2+car.width/2){
    car.velocityX=0;
  if(deformation>180){
    car.shapeColor="red"
  }
  if(deformation>80&&deformation<180){
    car.shapeColor="yellow"
  }
  if(deformation<80){
    car.shapeColor="green"
  }
}

  drawSprites();
}