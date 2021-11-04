function building(){
  if (step === 0){// takes the value in each block of numbers located in world1.js and transformes them into the level 
    boxXY = giveValues("wood");
    for(let y = 0; y < boxXY.length; y++){
      for(let x = 0; x < boxXY[y].length; x++){
        if(x === 0){
          spot1 = boxXY[y][x];
        }
        else if(x === 1){
          spot2 = boxXY[y][x];
        }
        else if(x === 2){
          spot3 = boxXY[y][x];
        }
        else if(x === 3){
          spot4 = boxXY[y][x];
        }
      }
      boxes.push(new Wood(spot1, spot2, spot3/2, spot4/2, wood, 3));
    }
    step = 1;
  }
  else if (step === 1){
    boxXY = giveValues("pig");
    for(let y = 0; y < boxXY.length; y++){
      for(let x = 0; x < boxXY[y].length; x++){
        if(x === 0){
          spot1 = boxXY[y][x];
        }
        else if(x === 1){
          spot2 = boxXY[y][x];
        }
        else if(x === 2){
          spot3 = boxXY[y][x];
        }
      }
      pigs.push(new Pig(spot1, spot2, spot3, pig, 3));
    }
    step = 2;
  }
}