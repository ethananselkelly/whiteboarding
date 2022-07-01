function Mormons(startingNumber, reach, target, missions = 0){

  if (startingNumber < target) {
    startingNumber += reach * startingNumber
    missions ++
    return Mormons(startingNumber, reach, target, missions)
  }
  
  return missions
}

  console.log(Mormons(10,3,9))

  console.log(Mormons(40,2,120))

  console.log(Mormons(40,2,121))

  console.log(Mormons(20000,2,7000000000))