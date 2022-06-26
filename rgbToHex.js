function rgb(r, g, b){
  let arr = [r, g, b]
 
   let hex = arr.map((value) => {
     if (value<0){
       value = 0
     }
     if (value>255){
       value = 255
     }
     value = parseInt(value).toString(16).toUpperCase()
     return (value.length === 1) ? "0"+value : value
   })
   hex = hex.join('')
   return hex
 }