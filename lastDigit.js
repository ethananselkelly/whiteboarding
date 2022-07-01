var lastDigit = function(str1, str2){ 

  const baseArr = str1.split('')
  const baseUnitsDigit = baseArr[baseArr.length-1]
  const num2 = parseInt(str2)
  const exponentRemainder = num2%4
  console.log('base units digit: ', baseUnitsDigit)
  console.log('remainder: ', exponentRemainder)
  let returnDigit
  
  if (baseUnitsDigit === 0 || 1 || 5) {
    returnDigit = baseUnitsDigit
  } else 
  if (exponentRemainder === 0) {
    if (baseUnitsDigit === 2 || 4 || 6 || 8) {
       returnDigit = 6
    } else if (baseUnitsDigit === 3 || 7 || 9) {
       returnDigit = 1
    }
  } else {
    returnDigit = Math.pow(baseUnitsDigit, exponentRemainder)
  }
  

  // if (baseUnitsDigit === 0 || 1 || 5) {
  //   returnDigit = baseUnitsDigit
  // } else if (num2%4 === 0) {
  //   if (baseUnitsDigit%2 === 0) {
  //     returnDigit = 6
  //   }
  //   if (baseUnitsDigit === 3 || 7 || 9) {
  //     returnDigit = 1
  //   }
  // } else {
  //   console.log(baseUnitsDigit, num2%4)
  //   returnDigit = Math.pow(baseUnitsDigit, num2%4)
  // } 

  if (returnDigit >= 10) {
    const returnDigitArray = Array.from(String(returnDigit))
    returnDigit = returnDigitArray[returnDigitArray.length-1]
  }

  return parseInt(returnDigit); 
}

console.log(lastDigit("4", "1"))
console.log(lastDigit("4", "2"))
console.log(lastDigit("9", "7"))
console.log(lastDigit("10","10000000000"))
console.log(lastDigit("1606938044258990275541962092341162602522202993782792835301376","2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376"))