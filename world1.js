function giveValues(item){
  let sizeWidth = windowWidth/50;
  let realSize = windowWidth/sizeWidth;
  let sizeHeight = windowHeight/200;
  let realHeight = windowHeight/sizeHeight;

  if (item === "wood"){
    // setting the value of each building third one is the top block
    return [[width - 290, height - 200, realSize, realHeight],[width - 400, height - 200, realSize, realHeight], [width - 350, height - 350, realSize * 6, realHeight/4], // right block
      [width -  590, height - 200, realSize, realHeight],[width - 700, height - 200, realSize, realHeight], [width - 650, height - 350, realSize * 6, realHeight/4], // left block
      [width - 630, height - 370, realSize, realHeight],[width - 370, height - 370, realSize, realHeight], [width - 500, height - 370, realSize * 8, realHeight/4], [width - 500, height - 420, realSize * 11.5, realHeight/4]]; // top block
  }
  else if (item === "pig"){
    return [[width - 350, height - 100, realSize/4], [width - 650, height - 100, realSize/4], [width - 500, height - 370, realSize/4]];// right pig, left pig, top pig
  }
}