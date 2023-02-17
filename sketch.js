
var PLAY=1;
var END=0;
var gameState = PLAY;
var bow, arrow, background, redB, pinkB, greenB, blueB, arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage,blue_balloonImage, backgorundImage;

var score =0;
function preload(){


  backgroundImage = loadImage("background0.png");

  arrowImg = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_ballon0.png");
  green_balloonImage = loadImage("green_ballon0.png");
  blue_balloonImage = loadImage("blue_ballon0.png");
  pink_balloonImage = loadImage("pink_ballon0.png");
  
  
  
}
function setup(){
  createCanvaas(400, 400);



  scene = createSprite(0,0,400,400);
  scene.addImage(backgorundImage);
  scene.scale = 2.5


  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage);
  bow.scale = 1;

   score = 0

    redB= new Group();
    greenB= new Group();
    blueB=new Group();
    pinkB=new Group();
    arrowGroup=new Group();

}
function draw(){
background(0);
if(gameState === PLAY){

scene.velocityX = -3


if (scane.x <0){
  scene.x = scane.widht/2;
}

bow.y = World.mouseY




if (keyDown("space")){
  createArrow();

}



var select_balloon = Math.round(random(1,4));


if (Wolrd.frameCount % 100==0){
switch(select_balloon ){
  case 1: redBalloon();
  break;
  case 2: blueBalloon();
  break;
  case 3: pinkBalloon();
  break;
  case 4: greenBalloon();
  break;
  default:break;
}

}
 if (arrowGroup.isTouching(redB)){
  redB.destroyEach

  gameState= END;

 }



}

if (gameState ===END){
bow.destroy();
scane.velocityX = 0;


}

if (arrowGroup.isTouching(greenB)){
  greenB.destroyEach();
  arrowGroup.destroyEach();
  score=score=3;
}

  if (arrowGroup.isTouching(blueB)){
    blueB.destroyEach();
      arrowGroup.destroyEach();  
    score=score+2;  
  }


  if (arrowGroup.isTouching(pinkB)){

    pinkB.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
  }







drawSprites();
text("Pontuação:"+ score,300,50);

}
function redBalloon(){
  var red = createSprite(0,Math.round(random(20,370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redB.add(red);
}

function blueBalloon(){
  var blue = createSprite(0,Math.round(random(20,370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueB.add(blue);
}

function greenBalloon(){
  var green = createSprite(0,Math.round(random(20,370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenB.add(green);
}

function pinkBalloon(){
  var pink = createSprite(0,Math.round(random(20,370)), 10, 10);
  pink.addImage(red_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 0.1;
  pinkB.add(pink);
}

function createArrow(){
  var arrow= createSprite(100,100,60,10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime= 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
}