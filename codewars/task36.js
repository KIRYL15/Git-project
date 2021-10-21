//https://www.codewars.com/kata/5875b200d520904a04000003/train/javascript
function enough(cap, on, wait) {
  
    let sum = on + wait;
    
    let res = sum - cap;
    
    if (cap >= sum){
      return 0
      } else {
        return res
      }
    
    // your code here
  }