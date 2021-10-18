//сщздать функцию, которая вычисляет четное ли число или нет
//https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript
function even_or_odd(number) {
	if (Number.isInteger(number/2)) {
 return "Even"
 }  
	return "Odd"
}

even_or_odd(8)