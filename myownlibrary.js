function isTouching(objectA,objectB){
    if (objectA.x - objectB.x< objectA.width/2+objectB.width/2 &&
      objectB.x - objectA.x< objectA.width/2+objectB.width/2 && 
      objectA.y - objectB.y< objectA.height/2+objectB.height/2 &&
      objectB.y - objectA.y< objectA.height/2+objectB.height/2) {
        return true;
      
    } else {
      return false;
    }
  }
  function bounceOff(objectA,objectB){
    if (objectA.x - objectB.x < objectB.width/2 + objectA.width/2
      && objectB.x - objectA.x < objectB.width/2 + objectA.width/2) {
        objectA.velocityX = objectA.velocityX * (-1);
        objectB.velocityX = objectB.velocityX * (-1);
  }
  if (objectA.y - objectB.y < objectB.height/2 + objectA.height/2
    && objectB.y - objectA.y < objectB.height/2 + objectA.height/2){
      objectA.velocityY = objectA.velocityY * (-1);
      objectB.velocityY = objectB.velocityY * (-1);
  }
  }