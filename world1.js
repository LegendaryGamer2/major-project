function giveValues(item){
  let sizeWidth = windowWidth/50;
  let realSize = windowWidth/sizeWidth;
  let sizeHeight = windowHeight/200;
  let realHeight = windowHeight/sizeHeight;

  if (item === "wood"){
    // setting the value of each building third one is the top block, one block is equal to one housing block for a pig
    return [[width - 290, height - 60, realSize, realHeight, 0],[width - 410, height - 60, realSize, realHeight, 0], [width - 350, height - 100, realSize * 6, realHeight/4 , 0], // right block
      [width -  590, height - 60, realSize, realHeight, 0], [width - 710, height - 60, realSize, realHeight, 0], [width - 650, height - 100, realSize * 6, realHeight/4, 0], // left block
      [width - 650, height - 170, realSize, realHeight, 0], [width - 350, height - 170, realSize, realHeight, 0], [width - 500, height - 340, realSize * 13, realHeight/4, 0], [width - 500, height - 200, realSize * 8, realHeight/4, 0.7]]; // top block it goes left pillar, right pillar, floor, roof 
  }
  else if (item === "pig"){
    return [[width - 350, height - 35, realSize/4], [width - 650, height - 35, realSize/4], [width - 500, height - 220, realSize/4]];// right pig, left pig, top pig
  }
}