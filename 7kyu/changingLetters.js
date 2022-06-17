function swap (string) {
    let vowels = /[aeiou]/gi
    return string.split('').map(x=>x.match(vowels) ? x.toUpperCase() : x).join('')
    }