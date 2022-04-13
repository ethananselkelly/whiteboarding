function rank(st, we, n) {
  if (st.trim() === '') {
    return 'No participants'
  }
  //breaks string into array of lowercase names
  st = st.toLowerCase().split(',')
  if (n > st.length) {
    return 'Not enough participants'
  }
  const people = {}
  for (let i=0; i<st.length; i++) {
    let name = st[i]
    let nameLetters = st[i].split('')
    let letterNumbers = []
    let nameScore = 0
    for (let u=0; u<nameLetters.length; u++) {
      nameScore += nameLetters[u].charCodeAt(0) -96
    }
    nameScore += nameLetters.length
    nameScore *= we[i]
    people[name] = nameScore
    console.log(people)
  }
  const orderedPeople = Object.keys(people).sort().reduce(
    (obj, key) => {
      obj[key] = people[key]
      return obj
    }
  )
  console.log(orderedPeople)
}