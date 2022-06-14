function moveVowel(input) {
    let vowStr = ''
    let consStr = ''
    let vowels = /[aeiou]/gi
    for(let i =0;i<input.length;i++){
      input[i].match(vowels) ? vowStr+=input[i] : consStr+=input[i]
    }
    return consStr + vowStr
  }