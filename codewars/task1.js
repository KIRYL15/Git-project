function solution(a, b){
    //let num1=a.length;
    //let num2=b.length;
    let num1 = a.length>b.length
    let num2 = a.length<b.length
    
    if (num1) {
     return b+a+b;
    } else if (num2){
      return a+b+a;
    }
    // your code here
  }