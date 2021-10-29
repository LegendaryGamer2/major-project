function giveValues(item){
  if (item === "wood"){
    // setting the value of each building third one is the top block
    return [[width - 300, height - 200, 50, 200],[width - 400, height - 200, 50, 200], [width - 350, height - 400, 150, 50], 
      [width - 600, height - 200, 50, 200],[width - 700, height - 200, 50, 200], [width - 650, height - 400, 150, 50]];
  }
  else if (item === "pig"){
    return [[width - 350, height - 100], [width - 650, height - 100]];
  }
}