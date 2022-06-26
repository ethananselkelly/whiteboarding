function moveZeros(arr) {
  let zeros = []
  let noZeros = arr.filter((thing) =>{ 
    if ( thing !== 0 ) {
        return true
      }
    else {
        zeros.push(0)
      }
    })
  
  arr = noZeros.concat(zeros)

  return arr
}