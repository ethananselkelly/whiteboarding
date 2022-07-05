function luckCheck(ticket){
  let ticketArray = ticket.split('').map(Number)
  if (ticketArray.length%2 != 0) {
    ticketArray.splice(ticketArray.length/2, 1)
  }
  
  const leftSum = ticketArray.slice(0, ticketArray.length/2).reduce((prevValue, curValue) => prevValue + curValue, 0)
  console.log(leftSum)
  const rightSum = ticketArray.slice(ticketArray.length/2).reduce((prevValue, curValue) => prevValue + curValue, 0)
  console.log(rightSum)

  return (leftSum === rightSum)
}

console.log(luckCheck('683179'))
//expects true
console.log(luckCheck('6830001'))
//expects false