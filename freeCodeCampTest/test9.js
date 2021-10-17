function sum(arr, n) {
    // рекурсия
  //let result = 1;
  if (n<=0){//база рекурсии
    return 0;
  } else {
    return sum(arr, n-1)+arr[n-1]
  }
    
  }
  sum(2, 3)