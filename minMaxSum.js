// Given five positive integers, 
// find the minimum and maximum values 
// that can be calculated by summing exactly four of the five integers. 
// Then print the respective minimum and maximum values 
// as a single line of two space-separated long integers.

let sums = []
let minusFirst = [...arr]
minusFirst.splice(0, 1)
sums.push(minusFirst.reduce((a, b) => a + b, 0))
let minusSecond = [...arr]
minusSecond.splice(1, 1)
sums.push(minusSecond.reduce((a, b) => a + b, 0))
let minusThird = [...arr]
minusThird.splice(2, 1)
sums.push(minusThird.reduce((a, b) => a + b, 0))
let minusFourth = [...arr]
minusFourth.splice(3, 1)
sums.push(minusFourth.reduce((a, b) => a + b, 0))
let minusFifth = [...arr]
minusFifth.splice(4, 1)
sums.push(minusFifth.reduce((a, b) => a + b, 0))

let highNum = 0
let lowNum = 0

for (let i=0; i<sums.length; i++){
  if (sums[i] > highNum) {
    highNum = sums[i]
  }
  if (i=0) {
    lowNum = sums[i]
  }
  if (sums[i] < lowNum) {
    lowNum = sums[i]
  }
}

console.log(minusFifth)
console.log(minusFirst)
console.log(minusFourth)
console.log(sums)