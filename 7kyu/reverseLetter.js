// Given a string str, reverse it omitting all non-alphabetic characters.

const reverseLetter = str => str.replace(/[^a-zA-Z]/g,'').split('').reverse().join('')