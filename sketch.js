var bg;
var base , baseImg;
var omNom ,plImg;

function preload(){
bg=loadImage("background.jpeg");
baseImg=loadImage("wood2.png")
plImg=loadImage("om nom.png")
}
function setup(){
canvas=createCanvas(displayWidth-30,displayHeight-150)

 base=createSprite(windowWidth/2,windowHeight-80,50,50)
 base.addImage(baseImg);

 omNom=createSprite(base.x,base.y-50,20,20)
omNom.addImage(plImg)
omNom.scale=0.08
}
function draw(){
background(bg);
drawSprites();
}