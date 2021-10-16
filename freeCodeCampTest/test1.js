function nextInLine(arr, item) {
    // Only change code below this line
    //var arr=[1, 2, 3];
    //var item = 1
   
    // Only change code above this line
    arr.push(item);
   return arr.shift();
  }
  
  // Setup
  var testArr = [1,2,3,4,5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));