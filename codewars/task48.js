//
function isDivisible(n, x, y) {
    let num1=n/x
    let num2=n/y
    
    if(num1>0 && num2>0 && n %x === 0 && n % y === 0){
      return true
      
    }else{
     return false
    }
  }
  isDivisible(12,3,4)