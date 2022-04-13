//verbose but works
function titleCase(title, minorWords) {
  if (title.trim() === '') {
    return ''
  }
  
  title = title.toLowerCase().split(' ')
  if (minorWords) {
    minorWords = minorWords.toLowerCase()
  }
  let newTitle = []
  for (let i=0; i<title.length; i++) {
    if (minorWords) {
      if (title.indexOf(title[i]) === 0) {
        title[i] = title[i].split('')
        title[i][0] = title[i][0].toUpperCase()
        title[i] = title[i].join('')
        newTitle.push(title[i])
      } else if (minorWords.split(' ').includes(title[i])) {
        newTitle.push(title[i])
      } else {
        title[i] = title[i].split('')
        title[i][0] = title[i][0].toUpperCase()
        title[i] = title[i].join('')
        newTitle.push(title[i])
      }
    } else {
      title[i] = title[i].split('')
      title[i][0] = title[i][0].toUpperCase()
      title[i] = title[i].join('')
      newTitle.push(title[i])
    }
  }
  
  return newTitle.join(' ')
}