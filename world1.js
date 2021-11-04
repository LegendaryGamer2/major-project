function giveValues(item){
  // the varaibles below ajust the size to alawys be a size a 50 and 200 respectivly
  let sizeWidth = windowWidth/100;
  let realSize = windowWidth/sizeWidth;
  let sizeHeight = windowHeight/400;
  let realHeight = windowHeight/sizeHeight;

  if (item === "wood"){
    // setting the value of each building third one is the top block, one block is equal to one housing block for a pig
    return [[width/1.5 - 260, height - 60, realSize, realHeight],[width/1.5  - 410, height - 60, realSize, realHeight], [width/1.5  - 350, height - 100, realSize * 6, realHeight/4 ], // right block
      [width/1.5 -  590, height - 60, realSize, realHeight], [width/1.5 - 710, height - 60, realSize, realHeight], [width/1.5 - 650, height - 100, realSize * 6, realHeight/4], // left block
      [width/1.5  - 650, height - 170, realSize, realHeight], [width/1.5 - 350, height - 170, realSize, realHeight], [width/1.5 - 500, height - 340, realSize * 13, realHeight/4]]; // top block it goes left pillar, right pillar, floor, roof 
  }
  else if (item === "pig"){// setting the values of the pigs
    return [[width/1.5 - 350, height - 35, realSize/4], [width/1.5 - 650, height - 35, realSize/4], [width/1.5 - 500, height - 280, realSize/4], [width/1.5 - 500, height - 500, realSize/4]];// right pig, left pig, top pig, highest pig
  }
}