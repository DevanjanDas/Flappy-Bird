var flappyBird;
var birdImage;
var Gameover; 
var restart;
var backgroundImage;
var Smallpipe,Smallpipe2;
var SmallpipeImg,Smallpipe2Img;
var Largepipe,Largepipe2;
var LargepipeImg,Largepipe2Img;
var invisiblePipe;
var smallPipeGroup,smallPipeGroup2;
var largePipeGroup,largePipeGroup2;
var invisiblePipeGroup;
var GameoverImg;
var score;
var gameState;



function preload(){
birdImage = loadImage("Assets/Flappy bird.png");
SmallpipeImg = loadImage("Assets/Smallpipe.png");
LargepipeImg = loadImage("Assets/Largepipe.png");
Smallpipe2Img = loadImage("Assets/Smallpipe2.png");
Largepipe2Img = loadImage("Assets/Largepipe2.png");
GameoverImg = loadImage("Assets/Gameover screen.png");

}


function setup() {
  createCanvas(800,400);
 flappyBird = createSprite(400, 200, 10, 30);
 flappyBird.debug = true;
   smallPipeGroup = new Group();
 smallPipeGroup2 = new Group();
 largePipeGroup = new Group();
 largePipeGroup2 = new Group();
 invisiblePipeGroup = new Group();
Gameover = createSprite(400,100,10,10);
Gameover.visible = false;
flappyBird.addImage("Bird",birdImage);
  flappyBird.scale = 0.2;
gameState = "play";

}

function draw() {
  background(0,0,0);  
 
if(gameState === "play"){
   
  if(keyDown("space") ) {
    flappyBird.velocityY = -3;
     
  }
  
  flappyBird.velocityY = flappyBird.velocityY + 1;

  spawnSmallpipe();
  spawnLargepipe();
  spawnInvisiblePipe(); 
  if(flappyBird.isTouching(invisiblePipeGroup)){
score = score + 2;
  }


  if(flappyBird.isTouching(smallPipeGroup) || flappyBird.isTouching(smallPipeGroup2) || flappyBird.isTouching(largePipeGroup)||flappyBird.isTouching(largePipeGroup2)){
gameState = "End";

 
}
if(flappyBird.y > 400 ){
gameState = "End";
}  
}
text("score" + score,50,50);


if(gameState === "End"){
text("GameOver",400,100);
Gameover.visible = true;
Gameover.addImage("Gameover",GameoverImg);
Gameover.scale = 0.5;
}




  drawSprites();
}



function spawnSmallpipe() {
if(frameCount % 60 === 0 ) {

  Smallpipe = createSprite(800,50,50,50); 
  Smallpipe.velocityX = -3;
 Smallpipe.addImage("Smallpipe",SmallpipeImg);
Smallpipe.scale = 0.2;
Smallpipe.debug = true;
smallPipeGroup.add(Smallpipe);

}
if(frameCount % 120 === 0 ) {
Smallpipe2 = createSprite(900,400,50,50);
Smallpipe2.velocityX = -3;
Smallpipe2.addImage("Smallpipe2",Smallpipe2Img);
Smallpipe2.scale = 0.2;
Smallpipe2.debug = true;
smallPipeGroup2.add(Smallpipe2);

}


}


function spawnLargepipe() {
if(frameCount % 60 === 0) {

  Largepipe = createSprite(800,450,50,50); 
  Largepipe.velocityX = -3; 
 Largepipe.addImage("Largepipe",LargepipeImg);
  Largepipe.scale = 0.2;
  Largepipe.debug = true;
  largePipeGroup.add(Largepipe);

}
if(frameCount % 120 === 0) {

  Largepipe2 = createSprite(900,10,50,50); 
  Largepipe2.velocityX = -3; 
 Largepipe2.addImage("Largepipe2",Largepipe2Img);
  Largepipe2.scale = 0.2;
  Largepipe2.debug= true;
  largePipeGroup2.add(Largepipe2);
  
}
   
     

  }

function spawnInvisiblePipe(){
  if(frameCount % 80 === 0 ) {

    InvisiblePipe = createSprite(850,250,50,50); 
    InvisiblePipe.velocityX = -3;
  invisiblePipeGroup.add(invisiblePipe);
    
}
}








