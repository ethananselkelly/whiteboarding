function pingPong(sounds) {
  const soundArr = sounds.split('-')
  console.log(soundArr)
  let pingCount = 0
  let pongCount = 0
  let firstHit = soundArr[0]
  let currentHit
  let lastHit
  
  for(let i=0; i<soundArr.length; i++) {
    if (soundArr[i] === 'ping' || soundArr[i] === 'pong') {
      lastHit = soundArr[i]
    }

    currentHit = soundArr[i]
    
    if (soundArr[i+1] != 'ping' && soundArr[i+1] != 'pong' && (soundArr[i-1] === 'ping' || soundArr[i-1] === 'pong')) {
      if (firstHit != currentHit && (currentHit === 'ping' || currentHit === 'pong')) {
         (firstHit === 'ping' ? pingCount++ : pongCount++)
      }
    }
    
    if (soundArr[i-1] != 'ping' && soundArr[i-1] != 'pong'&& (soundArr[i] === 'ping' || soundArr[i] === 'pong')) {
      firstHit = soundArr[i]
    }
  }
  
  console.log('ping: ', pingCount, 'pong: ', pongCount)
  
  let winner
  if (pingCount > pongCount) {
    winner = 'ping'
  } else if (pingCount < pongCount) {
    winner = 'pong'
  } else if (pingCount === pongCount) {
    winner = (lastHit === 'ping') ? 'pong' : 'ping'
  }
  
  console.log('winner: ', winner)
  
  return winner
  
}
