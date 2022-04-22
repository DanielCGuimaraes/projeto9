
function setup() {
  createCanvas(400,400);
  background(51);
  box1 = createSprite(350,200,30,30);
  box1.shapeColor = "red";
  box2 = createSprite(50,200,30,30);
  box2.shapeColor = "blue";
  box3 = createSprite(200,50,30,30);
  box3.shapeColor = "black";
  box4 = createSprite(200,350,30,30);
  box4.shapeColor = "white";

}

function draw() 
{

  // escreva o código para alterar a cor de fundo 
  // para vermelho quando a seta para direita (RIGHT_ARROW) for pressionada
  if(keyIsDown(RIGHT_ARROW))
  {
    background("red");

  }

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    
  }
 
  if (keyIsDown(UP_ARROW)) 
  {
    background("black");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("greewhite");

  }


  
  drawSprites();
}

