var bg,bgImage,mallImage,mall,gcustomer,gc
var playerammount=10000;
var playerImage,player

function preload(){
bgImage=loadImage("assets/entry of the mall.jpeg")
mallImage=loadImage("assets/stores in the mall.jpeg")
gcustomer=loadImage("assets/customers.jpeg")
}

function setup(){
  createCanvas(800,500)
bg =createSprite(400,250,800,500)
 mall=createSprite(200,350,50,50)
 gcustomer=createSprite(400,50,250,50)

bg.addImage("background",bgImage)
mall.addImage("mall",mallImage)
mall.scale=0.1;
bg.scale=0.4;


gc.addAnimation("gc",gcustomer);
gc.scale=0.6;
}


function draw(){
  if(bg){
    bgImage.visible=false;
  }
  if(keyDown("space")){
    gc.velocityX=-3;

  }
drawSprites();
}