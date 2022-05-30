var bg
var balloonAnimation
var towers
var birds
var balloon;
var building
var lamp
var bottomObstacleGroup
var topObstaclesGroup
var gameState= 1;
var gameOverImage;
var gameOver;
var resetButtonImage;
var resetButton
var score=0;
//var balloonAIButton;
//var balloonAIButtonImage;


function preload()
{
bg=loadImage("assets/bg.png")

balloonAnimation=loadAnimation("assets/balloon1.png", "assets/balloon2.png","assets/balloon3.png")
obstacleBottomImage1=loadImage("/assets/obsBottom1.png")
obstacleBottomImage2=loadImage("/assets/obsBottom2.png")
obstacleBottomImage3=loadImage("/assets/obsBottom3.png")
obstaclesTopImage=loadImage("/assets/obsTop2.png")
gameOverImage=loadImage("/assets/gameOver.png")
resetButtonImage=loadImage("/assets/restart.png")
//balloonAIButtonImage=loadImage("/assets/restart.png")



}

function setup()
{
  createCanvas(600,600)
balloon=createSprite(100,200,30,30)
balloon.addAnimation("balloonMoving",balloonAnimation)
balloon.scale=0.2



bottomObstaclesGroup=new Group();
topObstaclesGroup=new Group();

gameOver= createSprite(325,325,325,325);
gameOver.addImage(gameOverImage)
gameOver.visible=false

resetButton=createSprite(325,360,7,7)
resetButton.addImage(resetButtonImage)
resetButton.visible=false
resetButton.scale=0.4
//balloonAIButton=createImg("restart.png")
//balloonAIButton.size(50,50)
//balloonAIButton.position(500,500)
//balloonAIButton.mouseClicked(mousePressedBalloon)

/*balloonAIButton=createSprite(500,500,18,18)
balloonAIButton.addImage(balloonAIButtonImage)
balloonAIButton.scale=0.9*/



 
}

function draw()
{
  background(bg)
  textSize(35)
  text("Score:"+score,400,80);
  

        if(gameState==1){
          balloon.velocityY=balloon.velocityY+0.5
          spawnBottomObstacles();
          spawnTopObstacles();
          score=Math.round(score+frameCount/100)
          
          

            if(keyIsDown(UP_ARROW)){
            balloon.velocityY=-8
            background("purple")
            }


            if(balloon.isTouching(bottomObstaclesGroup)|| balloon.isTouching(topObstaclesGroup)){

              gameState=0;
              
              
            }   
            //if(mousePressedOver(balloonAIButton)){
              //balloon.x=350
              //balloon.y=300
            //}
            if(balloon.y>650||balloon.y<0){
              balloon.x=150
              balloon.y=325
              gameState=0
            }
            
      }
  else if(gameState==0){
resetButton.visible=true
gameOver.visible=true
bottomObstaclesGroup.setLifetimeEach(-1)
topObstaclesGroup.setLifetimeEach(-1)
bottomObstaclesGroup.setVelocityXEach(0)
topObstaclesGroup.setVelocityXEach(0)
balloon.velocityY=0



  }    

  if(mousePressedOver(resetButton)){
    gameState=1
    bottomObstaclesGroup.setLifetimeEach(0)
topObstaclesGroup.setLifetimeEach(0)
resetButton.visible=false
gameOver.visible=false
score=0

  }
  
drawSprites();



}



function spawnBottomObstacles(){
  if(frameCount%60==0){
randomNumber=Math.round(random(1,4))
  var obstaclesBottom=createSprite(650,510,10,10)
  bottomObstaclesGroup.add(obstaclesBottom)
  obstaclesBottom.velocityX=-5-score/100
  obstaclesBottom.scale=0.08
  obstaclesBottom.lifetime=130
switch (randomNumber) {
  
  case 1: obstaclesBottom.addImage(obstacleBottomImage1)
    break;
    case 2: obstaclesBottom.addImage(obstacleBottomImage2)
    break ;
    case 3: obstaclesBottom.addImage(obstacleBottomImage3)
    break;

  
}
}



}
function spawnTopObstacles(){
if(frameCount%60==0){
 var randomYPosition=Math.round(random(25,80))
var obstaclesTop=createSprite(650,randomYPosition,15,15)
topObstaclesGroup.add(obstaclesTop)
obstaclesTop.velocityX=-5-score/100
obstaclesTop.scale=0.06
obstaclesTop.addImage(obstaclesTopImage)
obstaclesTop.lifetime=130

}



}
function mousePressedBalloon(){

console.log("mousePressedBallon works")







}