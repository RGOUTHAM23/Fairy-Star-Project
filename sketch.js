const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var fairy,fairyImage,fairyVoice;
var star,starImage,starBody;
var bgImage;

var myEngine,myWorld;
function preload()
{
   //preload the images and sounds here
   fairyImage = loadAnimation("images/fairy1.png","images/fairy2.png")
   starImage = loadImage("images/star.png");
   bgImage = loadImage("images/starnight.png");
   fairyVoice = loadSound("sound/JoyMusic.mp3");
   
}

function setup() {
  createCanvas(800, 750);
  fairy=createSprite(200,520,20,20);
  fairy.addAnimation("a",fairyImage);
  fairy.scale=0.25;
  
  star=createSprite(640,60,20,20);
  star.addImage("b",starImage);
  star.scale=0.2;

  myEngine = Engine.create();
  myWorld = myEngine.world;

  starBody = Bodies.circle(640,60,15,{isStatic : true});
  World.add(myWorld,starBody);

}

function draw() {
  background(bgImage);
  
  fairyVoice.play();

  Engine.update(myEngine);

  star.x=starBody.position.x;
  star.y=starBody.position.y;

  if(starBody.position.y > 468){
    Body.setStatic(starBody,true);
  }

  drawSprites();

}
function keyPressed(){
   if(keyCode === RIGHT_ARROW){
     fairy.x = fairy.x+20;
   }

   if(keyCode === LEFT_ARROW){
     fairy.x = fairy.x-20;
   }  

   if(keyCode === DOWN_ARROW){
     Body.setStatic(starBody,false);
   }


}