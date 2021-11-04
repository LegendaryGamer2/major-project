function giveValues(item){
  let sizeWidth = windowWidth/100;
  let realSize = windowWidth/sizeWidth;
  let sizeHeight = windowHeight/400;
  let realHeight = windowHeight/sizeHeight;

  if (item === "wood"){
    // setting the value of each building third one is the top block, one block is equal to one housing block for a pig
    return [[width - 290, height - 60, realSize, realHeight],[width - 410, height - 60, realSize, realHeight], [width - 350, height - 100, realSize * 6, realHeight/4 ], // right block
      [width -  590, height - 60, realSize, realHeight], [width - 710, height - 60, realSize, realHeight], [width - 650, height - 100, realSize * 6, realHeight/4], // left block
      [width - 650, height - 170, realSize, realHeight], [width - 350, height - 170, realSize, realHeight], [width - 500, height - 340, realSize * 13, realHeight/4]]; // top block it goes left pillar, right pillar, floor, roof 
  }
  else if (item === "pig"){
    return [[width - 350, height - 35, realSize/4], [width - 650, height - 35, realSize/4], [width - 500, height - 550, realSize/4]];// right pig, left pig, top pig
  }
}