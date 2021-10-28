//
https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript
const grow=x=> x.reduce((a,b) => a*b);
const grow = (nums) => nums.reduce((product, num) => product * num, 1);
const grow = x => {
    let res = 1;
    for (let i = 0; i < x.length; i++) {
      res *= x[i];
    }
    return res;
  };