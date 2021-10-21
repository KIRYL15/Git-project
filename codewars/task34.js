//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript
function abbrevName(name){
  
    let str = name.split(" ");
    
    let firstName1 = str[0];
    
    let firstName2 = str[1]
    
    let one = firstName1[0].toUpperCase() + firstName2[0].toUpperCase()
  
  
    
   // let str1 = name.match(/[A-Z]/g).join('')
    return one.split("").join(".")
  }
  