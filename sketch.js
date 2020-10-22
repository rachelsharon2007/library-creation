var fixedRect,movingRect;
var object1,object2;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 50);
  movingRect = createSprite(200, 200, 50, 50);
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "green";
  object1 = createSprite(100, 100, 50, 50);
  object2 = createSprite(200, 100, 50, 50);
  object1.shapeColor = "green";
  object2.shapeColor = "green";

  fixedRect.velocityY = -4;
  object2.velocityY = 4;
}

function draw() {
  background(255,255,255);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  if (isTouching(movingRect,object1)) {
    object1.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  } else {
    object1.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  bounceOff(fixedRect,object2);
  drawSprites();
}
