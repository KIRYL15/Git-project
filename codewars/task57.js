//https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript
function countSheeps(arrayOfSheep) {
    let count = arrayOfSheep.filter(function(value){return value});
    return count.length;
}