//https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript
function betterThanAverage(classPoints, yourPoints) {
  
    let result = classPoints.reduce(function(sum, elem) {
      return sum + elem;
  }, 0);
    let average = result/classPoints.length
   if (average > yourPoints){
     return false
   } else {
     return true
   }
  
    // Your code here
  }