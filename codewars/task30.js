//
function digitize(n) {

    let num = n.toString().split('').reverse()
    let digitics = num.map(Number)
    return digitics 
  }