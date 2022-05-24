// Write a function that takes in a string of one or more words, 
// and returns the same string, but with all five or more letter words 
// reversed (Just like the name of this Kata). Strings passed in will 
// consist of only letters and spaces. Spaces will be included only 
// when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(string){
    let arr = string.split(' ')
    let result = []

    for(let i=0;i<arr.length;i++){
        if(arr[i].length>=5){
            result.push(arr[i].split('').reverse().join(''))
        }else{
            result.push(arr[i])
        }
    }
    return result.join(' ')

}

  spinWords("Hey fellow warriors")