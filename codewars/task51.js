//https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascriptfunction rentalCarCost(d) {
    let num1=40
    let sum=40*d
    if(d<3){
      return sum
    }else if(d<7){
      return sum-20
    }else {
      return sum-50
    }
    
    }
    
    function rentalCarCost(d) {
        if(d<3) return d * 40;
        if(7>d && d>=3) return (d*40 -20);
        if(d>=7) return (d*40 -50);
      }
    
    const rentalCarCost = d => d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0));
