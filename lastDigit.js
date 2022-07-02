var lastDigit = function(str1, str2){ 
  console.log(str1)
  console.log(str2)
  const baseArr = str1.split('')
  const baseUnitsDigit = parseInt(baseArr[baseArr.length-1])
  let num2 = parseInt(str2)
  let returnDigit

  if (num2 === 0) {
    returnDigit = 1
    return returnDigit
  }

  if (num2 >= 10) {
    num2 = num2.toString().split('')
    num2 = parseInt(num2[num2.length-2] + num2[num2.length-1])
  }

  const exponentRemainder = num2%4
  console.log('base units digit: ', baseUnitsDigit)
  console.log('exponent: ', num2)
  console.log('remainder: ', exponentRemainder)

  if (baseUnitsDigit === 0 || baseUnitsDigit === 1 || baseUnitsDigit === 5) {
    console.log("BASEUNITS DIGIT IS 0 1 or 5")
    returnDigit = baseUnitsDigit
    return parseInt(returnDigit)
  } 

  if (exponentRemainder === 0) {
    console.log("REMAINDER IS 0")
    if (baseUnitsDigit === 2 || baseUnitsDigit === 4 || baseUnitsDigit === 6 || baseUnitsDigit === 8) {
      returnDigit = 6
      return parseInt(returnDigit)
    } else if (baseUnitsDigit === 3 || baseUnitsDigit === 7 || baseUnitsDigit === 9) {
      returnDigit = 1
      return parseInt(returnDigit)
    }
  } 
  
  if (exponentRemainder > 0) {
    console.log ("WE HAVE A REMAINDER")
    returnDigit = Math.pow(baseUnitsDigit, exponentRemainder)
  }

  if (returnDigit >= 10) {
    console.log("RETURN DIGIT IS 10 OR HIGHER")
    const returnDigitArray = Array.from(String(returnDigit))
    console.log(returnDigitArray)
    returnDigit = returnDigitArray[returnDigitArray.length-1]
    return parseInt(returnDigit)
  }

  return parseInt(returnDigit); 
}

console.log('last digit: ', lastDigit("4", "1"), 'expect: 4')
console.log('=========')

console.log('last digit: ', lastDigit("4", "2"), 'expect: 6')
console.log('=========')

console.log('last digit: ', lastDigit("9", "7"), 'expect: 9')
console.log('=========')

console.log('last digit: ', lastDigit("10","10000000000"), 'expect: 0')
console.log('=========')

console.log('last digit: ', lastDigit("1606938044258990275541962092341162602522202993782792835301376","2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376"), 'expect: 6')
console.log('=========')

console.log('last digit: ', lastDigit("3715290469715693021198967285016729344580685479654510946723", "68819615221552997273737174557165657483427362207517952651"), 'expect: 7')