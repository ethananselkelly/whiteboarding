function mix(s1, s2) {

  //we need to only save the letters that show up more than once 
  
  let s1Cache = {}
  let s2Cache = {}
  
  let arr1 = s1.replace(/[^a-z]/g, '').split('').sort()
  let arr2 = s2.replace(/[^a-z]/g, '').split('').sort()
  
  function fillCache(arr, cache) {
    arr.forEach((char) => {
      if (cache[char]) {
        cache[char] += 1
      } else cache[char] = 1
    })
  }
  
  fillCache(arr1, s1Cache)
  fillCache(arr2, s2Cache)
  
  function thinCache(cache) {
    for (const letter in cache) {
      if (cache[letter] < 2) {
        delete cache[letter]
      }
    }
  }

  thinCache(s1Cache)
  thinCache(s2Cache)

  // console.log(s1Cache, s2Cache)

  let mixedStrings = []

  function compareCache(cache1, cache2) {
    for (const letter in cache1) {
      // console.log(letter, 'cache1: ', cache1[letter], 'cache2: ', cache2[letter])

      if (cache2[letter] && cache2[letter]>cache1[letter]) {
        //we found a bigger letter in cache 2
        let stringOutput = '2:'
        const reps = cache2[letter]
        for(let i = 1; i <= reps; i++){
          stringOutput += letter
        }
        mixedStrings.push(stringOutput)
      } else if (cache1[letter]>cache2[letter] || cache2[letter] === undefined) {
        //we found a bigger letter in cache 1
        //OR letter not in cache 2
        let stringOutput = '1:'
        const reps = cache1[letter]
        for(let i=1; i<=reps; i++){
          stringOutput += letter
        }
        mixedStrings.push(stringOutput)
      } else {
        let stringOutput = '=:'
        const reps = cache1[letter]
        for (let i=1; i<=reps; i++) {
          stringOutput += letter
        }
        mixedStrings.push(stringOutput)
      }
    }
    for (const letter in cache2) {
      if (cache1[letter] === undefined) {
        let stringOutput = '2:'
        const reps = cache2[letter]
        for (let i=1; i<=reps; i++) {
          stringOutput += letter
        }
        mixedStrings.push(stringOutput)
      }
    }
  }

  //TODO:  handle ties
  //TODO: find letters in the SECOND string
  //TODO: try and do the above all in one pass?  idk
  compareCache(s1Cache, s2Cache)
  // console.log(mixedStrings)
  return mixedStrings.sort().sort((a,b) => b.length - a.length).join('/')
}

console.log(mix("Are they here", "yes, they are here"))
//SAMPLE OUTPUT - 2:eeeee/2:yy/=:hh/=:rr

console.log(mix("looping is fun but dangerous", "less dangerous than coding"))