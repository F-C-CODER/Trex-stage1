var trexImage,groundImage

//used to load all the images and sounds
function preload(){
   trexImage=loadAnimation("trex1.png","trex3.png","trex4.png")
   groundImage=loadImage("ground2.png")
}

//to create the structure of the game like canvas,sprites
function setup(){
    createCanvas(600,200)
    trex=createSprite(50,160,20,20)
    trex.addAnimation("trexlabel",trexImage)
    trex.scale=0.7

    ground=createSprite(300,170,600,10)
    ground.addImage("groundLabel",groundImage)


}

//working
function draw(){
  background("black")

  ground.velocityX=-4

  if(ground.x<0){
    ground.x=1188.5
  }
   
  console.log(ground.width)

  if(keyDown("space"))
  {
    trex.velocityY=-10
  }
  trex.velocityY=trex.velocityY+0.5

  trex.collide(ground)
  drawSprites()
}