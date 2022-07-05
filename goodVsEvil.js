function goodVsEvil(good, evil){
  let goodArray = good.split(' ')
  let evilArray = evil.split(' ')
  const goodWorth = [1, 2, 3, 3, 4, 10]
  const evilWorth = [1, 2, 2, 2, 3, 5, 10]
  let goodPoints = 0
  let evilPoints = 0
  goodArray.forEach((element, index) => {
    goodPoints += (element * goodWorth[index])
  })
  evilArray.forEach((element, index) => {
    evilPoints += (element * evilWorth[index])
  })
 
  if (goodPoints > evilPoints) {
    return "Battle Result: Good triumphs over Evil"
  } else if (evilPoints > goodPoints) {
    return "Battle Result: Evil eradicates all trace of Good"
  } else {
    return "Battle Result: No victor on this battle field"
  }
}

console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'))