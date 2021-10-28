//https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/train/javascript
function quarterOf(month){
    if (month<=3) {
      return 1
    }else if(month<=6){
      return 2
    }else if(month<=9){
      return 3
    }else if(month<=12){
      return 4
      
  }
    }


    const quarterOf = m => Math.ceil(m/3);



    const quarterOf = (month) => {
        // Your code here
        return Math.ceil(month / 3);
      }