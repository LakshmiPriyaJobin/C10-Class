var trex, trexImg;
var edges;
var ground;
var groundImg;
function preload()
{
    trexImg = loadAnimation("trex1.png","trex3.png", "trex4.png");
    groundImg = loadImage('ground2.png');
}

function setup() {
  createCanvas(600, 200);
  trex = createSprite(120, 130, 20, 50);
  trex.addAnimation("trex",trexImg);
  trex.scale = 0.6;
 

ground = createSprite(300,177,600,10)
ground.addImage(groundImg);
  edges = createEdgeSprites();
}

function draw() {
  background(220);

 // text(what i want display, x post, ypos);
  textSize(15);
  text(mouseX + "," + mouseY, mouseX, mouseY);

  ground.velocityX = -3;
console.log(ground.x);
if(ground.x<0){
 // ground.x = 300;
ground.x = ground.width/2;

}

  //make trex jump
   if(keyDown("space"))
   {
       trex.velocityY = -3;
   }
   
   //gravity
    trex.velocityY = trex.velocityY + 1;
  
   trex.collide(ground);


  //trex collides with bottom edge
    trex.collide(edges[3]);
   

  drawSprites();
}