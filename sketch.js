var bgImg;
var player,playerImg;
var obstacle,obstacleImg,obstacleGroup;
var gameOverImg;
var bullet,bulletImg,bulletGroup;
var asteroid,asteroidImg;
var score=0;



function preload(){
bgImg = loadImage("assets/bg2.jpg")
playerImg=loadImage("assets/RockeTransparent.png")
obstacleImg=loadImage("assets/obsTop2.png")
gameOverImg=loadImage("assets/gameOver.png")
bulletImg=loadImage("assets/bullet1.png")
asteroidImg=loadImage("assets/asteroid1.png")
}

function setup(){
createCanvas(1200,600);

player= createSprite(600,550);
player.addImage(playerImg);



obstacleGroup=new Group();

}
score=0;
function draw() {
  
  background(bgImg);

  spawnBirds();
  spawnAsteroids();
  
  
  if(keyDown("space")){
   spawnBullets();
   
  }
    
  player.x=mouseX;

  
          
   
        drawSprites();
        
}
function spawnBirds(){
  if(frameCount%300===0){
    obstacle= createSprite(1250,100);
    obstacle.addImage(obstacleImg);
    obstacle.y=Math.round(random(10,250));
    obstacle.scale=0.1;
    obstacle.velocityX=-2;
    obstacle.lifetime=700;
    obstacleGroup.add(obstacle);
  }
}

function spawnBullets(){
  bullet=createSprite(600,480);
  bullet.x=player.x;
  bullet.velocityY=-2;
bullet.addImage(bulletImg)
bullet.scale=0.2

if(bullet.isTouching(asteroid)){
  asteroid.visible=false;
}
}

function spawnAsteroids(){
  if(frameCount%150===0){
  asteroid=createSprite(400,50);
  asteroid.velocityY=2;
  asteroid.x=Math.round(random(50,1150));
  asteroid.addImage(asteroidImg);
  asteroid.scale=0.5}

  
}