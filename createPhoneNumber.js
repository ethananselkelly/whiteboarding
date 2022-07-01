function createPhoneNumber(numbers){
  numbers.splice(6, 0, '-')
  numbers.splice(3, 0, ') ')
  numbers.splice(0, 0, '(')
  return numbers.join().replace(/\,/g, '')
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))