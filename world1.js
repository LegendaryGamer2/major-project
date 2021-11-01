function giveValues(item){
  let sizeWidth = windowWidth/50;
  let realSize = windowWidth/sizeWidth;
  if (item === "wood"){
    // setting the value of each building third one is the top block
    return [[width - 300, height - 200, realSize, 200],[width - 400, height - 200, realSize, 200], [width - 350, height - 400, realSize * 6, 50], // right block
      [width - 600, height - 200, realSize, 200],[width - 700, height - 200, realSize, 200], [width - 650, height - 400, realSize * 6, 50], // left block
      [width - 650, height - 450, realSize, 200],[width - 400, height - 450, realSize, 200], [width - 535, height - 450, realSize * 10, 50], [width - 510, height - 550, 601, 50]]; // top block
  }
  else if (item === "pig"){
    return [[width - 350, height - 100, realSize/4], [width - 650, height - 100, realSize/4], [width - 500, height - 550, realSize/4]];// right pig, left pig, top pig
  }
}