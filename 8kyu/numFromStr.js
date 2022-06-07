//find the number in a string and return it 

function getNumberFromString(s) {
    return Number(s.replace(/[\D]/g, ''))
  }