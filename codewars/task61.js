//https://www.codewars.com/kata/5a360620f28b82a711000047/train/javascript
function defineSuit(card) {
    let club=card.indexOf('♣')
    let dimond=card.indexOf('♦')
    let heart=card.indexOf('♥')
    let spa=card.indexOf('♠')
    
       if(club===1 || club===2){
        return 'clubs'
    }else if(dimond===1 || dimond===2){
      return 'diamonds'
    }else if(heart===1 || heart===2){
          return 'hearts'
    }else if(spa===1 || spa===2){
          return 'spades'
    }
     }

     https://www.codewars.com/kata/5a360620f28b82a711000047/solutions/javascript