//
function correct(string){
	let city = {
    '5': 'S',
    '0': 'O',
    '1': 'I',
}
  return string.replace(/[501]/g, function(m) { return city[m]})
  }