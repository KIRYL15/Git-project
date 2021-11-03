//https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript
var summation = function (num) {
    if(num===1){
      return 1
    }else{
      return  num+summation(num-1)
    }
   }