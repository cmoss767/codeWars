// An isogram is a word that has no repeating letters,
//  consecutive or non-consecutive. Implement a function that determines whether 
//  a string that contains only letters is an isogram. 
//  Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str){
    let arr = []
    let count = 0
    for(let i = 0;i<str.length;i++){
        if (arr.includes(str[i].toLowerCase())){
            count++
        }
        arr.push(str[i].toLowerCase())
    }
    return count === 0 
  }
  