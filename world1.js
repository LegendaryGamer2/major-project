function giveValues(item){
  let sizeWidth = windowWidth/50;
  let realSize = windowWidth/sizeWidth;
  let sizeHeight = windowHeight/200;
  let realHeight = windowHeight/sizeHeight;

  if (item === "wood"){
    // setting the value of each building third one is the top block, one block is equal to one housing block for a pig
    return [[width - 290, height - 100, realSize, realHeight, 10000],[width - 410, height - 100, realSize, realHeight, 10000], [width - 350, height - 150, realSize * 6, realHeight/4 , 200], // right block
      [width -  590, height - 100, realSize, realHeight, 10000],[width - 710, height - 100, realSize, realHeight, 10000], [width - 650, height - 150, realSize * 6, realHeight/4, 200], // left block
      [width - 650, height - 170, realSize, realHeight, 100],[width - 350, height - 170, realSize, realHeight, 100], [width - 500, height - 172, realSize * 8, realHeight/4, 10], [width - 500, height - 270, realSize * 13, realHeight/4, 100]]; // top block it goes left pillar, right pillar, floor, roof 
  }
  else if (item === "pig"){
    return [[width - 350, height - 35, realSize/4], [width - 650, height - 35, realSize/4], [width - 500, height - 210, realSize/4]];// right pig, left pig, top pig
  }
}