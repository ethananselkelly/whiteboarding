function cleanString(s) {
  let sArr = s.split('')
  for (let i=0; i < sArr.length; i++) {
    if (sArr[i] === '#' && sArr[i-1]) {
      sArr.splice(i-1, 2)
      i -= 2
    } else if (sArr[i] === '#') {
      sArr.shift()
      i--
    }
  }

  return sArr.join('')
}

console.log(cleanString('abc#d##c'))
//expects 'ac'
console.log(cleanString('abc####d##c#'))
//expects ''