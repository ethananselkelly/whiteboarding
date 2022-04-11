//checks for empty string
if (title.trim() === '') {
  return ''
}

title = title.toLowerCase().split(' ')
console.log(title)
if (minorWords) {
  minorWords = minorWords.toLowerCase()
}
console.log(minorWords)
//title = ['the', 'wind', 'in', 'the', 'willows']
let newTitle = []
title.forEach((word) => {
  if (minorWords) {
    if (title.indexOf(word) === 0) {
      word = word.split('')
      word[0] = word[0].toUpperCase()
      word = word.join('')
      newTitle.push(word)
    } else if (minorWords.split(' ').includes(word)) {
      newTitle.push(word)
    } else {
      word = word.split('')
      word[0] = word[0].toUpperCase()
      word = word.join('')
      newTitle.push(word)
    }
  } else {
    word = word.split('')
    word[0] = word[0].toUpperCase()
    word = word.join('')
    newTitle.push(word)
  }
  
})
console.log(newTitle)
return newTitle.join(' ')