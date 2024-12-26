let leftKeyPressed = false;
let rightKeyPressed = false;
let upKeyPressed = false;
let downKeyPressed = false;
let key = "none";
function keyPressed(evt){
  if(evt.keyCode == 37||evt.keyCode==65){
      leftKeyPressed = true;
  }
  else if(evt.keyCode == 39||evt.keyCode==68){
      rightKeyPressed = true;
  }
  else if(evt.keyCode == 38||evt.keyCode==87){
      upKeyPressed = true;
  }
  else if(evt.keyCode == 40||evt.keyCode==83){
      downKeyPressed = true;
  }
}
function keyReleased(evt){
  if(evt.keyCode == 37||evt.keyCode==65){
      leftKeyPressed = false;
  }
  else if(evt.keyCode == 39||evt.keyCode==68){
      rightKeyPressed = false;
  }
  else if(evt.keyCode == 38||evt.keyCode==87){
      upKeyPressed = false;
  }
  else if(evt.keyCode == 40||evt.keyCode==83){
      downKeyPressed = false;
  }
  key = "none";
}
function playerMove(){
    if(leftKeyPressed){
      left()
    }
    if(rightKeyPressed){
      right()
    }
    if(upKeyPressed){
      up()
    }
    if(downKeyPressed){
      down()
    }
}
function useKeys(){
  requestAnimationFrame(useKeys)
  document.addEventListener('keydown',keyPressed);
  document.addEventListener('keyup',keyReleased);
  playerMove();
}
