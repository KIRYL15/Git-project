// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript 
// сумма положительных элементов массива
function positiveSum(arr) {
    
    let sum=0
    for (let i=0; i<arr.length; i++){
        if(arr[i].length === undefined){
          if (arr[i]>0){
          sum += arr[i]
        }
      } else {
        sum+=sum(arr[i])
      }
    } return sum
  }