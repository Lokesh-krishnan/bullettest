var bullet, wall;
var speed,weight,thickness;
var deformation;

function setup() {
  createCanvas(800,400);

  speed = random(55,90);
  weight = random(400,1500); 
  thickness = random(22,83)

  bullet= createSprite(50,200,70,10);
  bullet.velocityX = speed;

  wall = createSprite(650,200,thickness,height/2)
  wall.shapeColor = (80,80,80);

  deformation = 0.5 * weight * speed * speed/22500
  
 
  
}

function draw() {
  background("black");  

if (wall.x - bullet.x < (bullet.width + wall.width)/2){

  bullet.velocityX = 0;
  var deformation = 0.5 * weight * speed * speed/22500;

  if(deformation < 100){
   bullet.shapeColor = color(0,255,0);
} else if(deformation > 100 && deformation < 180){
   bullet.shapeColor = color(230,230,0);
} else if(deformation > 180){
   bullet.shapeColor = color(255,0,0);
}
}

if(hasCollided(bullet,wall)){
  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness)
 
  if(damage > 10){
    wall.shapeColor = color(255,0,0);
  }

  if(damage < 10){
    wall.shapeColor = color(0,255,0);
  }
}

  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;

  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }
  return false;
}