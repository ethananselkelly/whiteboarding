function whiteBlackAreas(cols, rows) {
  
  const totalArea = (cols.reduce((a, b) => a + b, 0)*rows.reduce((a, b) => a + b, 0))
  console.log(totalArea)
  // for (let i=0; i<cols.length; i++) {
    //   for (let u=0; u<rows.length; u++) {
      //     if ((i+u)%2 === 0) {
        //       whiteArea += (cols[i]*rows[u])
        //     }
        //   }
        // }
console.log(cols, rows)
let whiteArea = 0
let evenRows = 0
let oddRows = 0
for (let i=0; i<rows.length; i++) {
  if (i%2 === 0) {
    console.log(rows[i])
    evenRows += rows[i]
  } else {
    console.log(rows[i])
    oddRows += rows[i]
  }
}
for (let i=0; i<cols.length; i++) {
  if (i%2 === 0) {
    whiteArea += (cols[i]*evenRows)

  }
}
console.log(evenRows, oddRows)
console.log(whiteArea)
let blackArea = totalArea-whiteArea

return [whiteArea, blackArea]

}