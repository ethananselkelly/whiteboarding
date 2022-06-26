// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

let numSplit = num.toString().split('')
let numArray = numSplit.map(Number)
let numArrayLength = numArray.length()
console.log(numArray)
console.log(numArrayLength)