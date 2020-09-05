var player,playerImg;
var bg;
var enemy,enemyImg;
var ground;
var upArrow,rightArrow,leftArrow,downArrow,shootBullet;
var bullet,bulletImg;


function preload(){
  playerImg=loadImage("images/player.jpg");
  bg=loadImage("images/bg.jpeg");
  enemyImg=loadImage("images/enemies.png");
  bulletImg=loadImage("images/normalBullet.jpg");
}


function setup(){
  createCanvas(displayWidth-20,displayHeight-20);

  ground=createSprite(displayWidth/2,displayHeight-200,displayWidth,20);
  ground.visible=false;
  

  player=createSprite(100,displayHeight-250,50,50);
  player.addImage("player",playerImg);
  player.scale=0.25;

  enemy=createSprite(500,displayHeight-250,50,50);
  enemy.addImage("enemy",enemyImg);
  enemy.scale=0.7;

  upArrow=createButton("JUMP");
upArrow.position(displayWidth-400,displayHeight-300);
upArrow.mousePressed(()=>{
  player.y=player.y-50;

});

downArrow=createButton("DOWN");
downArrow.position(displayWidth-400,displayHeight-250);
downArrow.mousePressed(()=>{
  player.y=player.y+50;
})

 rightArrow=createButton("RIGHT");
  rightArrow.position(displayWidth-350,displayHeight-270);
  rightArrow.mousePressed(()=>{
    player.x=player.x+40;
  })

  leftArrow=createButton("LEFT");
  leftArrow.position(displayWidth-450,displayHeight-270);
  leftArrow.mousePressed(()=>{
    player.x=player.x-40;
  })

  shootBullet=createButton("SHOOT");
  shootBullet.position(displayWidth-400,displayHeight-350);
  shootBullet.mousePressed(()=>{
    bullet.velocityX=5;
  })

  bullet=createSprite(100,displayHeight-250,50,50);
  bullet.addImage("gun",bulletImg);
  bullet.x=player.x;
  bullet.y=World.mouseY;
  //bullet.visible=false;
  bullet.scale=0.1;
}


function draw(){
  background(bg);
  
  //camera.position.x=player.x;
  //camera.position.y=displayHeight/2;

player.collide(ground);
enemy.collide(ground);

if(keyIsDown(UP_ARROW)){
  bullet.visible=true;
  bullet.velocityX=5;
}
if(enemy.isTouching(bullet)){
  enemy.destroy();
  bullet.destroy();
}
  drawSprites();
}