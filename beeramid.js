const beeramid = function(bonus, price) {
  let beerCount = Math.floor(bonus/price)
  let levelCount = 0

  for(i = 1; Math.pow(i, 2) <= beerCount; i ++) {
    const newLayer = Math.pow(i, 2)
    beerCount = beerCount - newLayer
    levelCount ++
  }
  
  return levelCount
}