//https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript
function sumMix(x){
    let num1 = x.map(Number)
    return num1.reduce((a, b)=>a+b, 0)
    }


    function sumMix(x){
        return x.map(a => +a).reduce((a, b) => a + b);
      }



      const sumMix=x=>x.reduce((a,b)=>+b+a,0)
