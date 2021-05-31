var mr;
var fr;


function setup() {
  createCanvas(1200,800);
 fr = createSprite(200, 200, 50, 50);
fr.shapeColor = "green";

mr = createSprite(400,400 , 80 , 30)
mr.shapeColor ="green";



}

function draw() {
  background(255,255,255);  
  
  mr.y = World.mouseY;
  mr.x = World.mouseX;
  
  if(mr.x - fr.x < fr.width/2 + mr.width/2 && fr.x - mr.x < fr.width/2 + mr.width/2
    && mr.y - fr.y < fr.height/2 + mr.height/2 && fr.y - mr.y < fr.height/2 + mr.height/2 ){

    fr.shapeColor = "red";
    mr.shapeColor = "red";
  }
  else{

  fr.shapeColor = "green";
  mr.shapeColor = "green";

  }
  
  console.log(mr.x - fr.x)
  drawSprites();
}