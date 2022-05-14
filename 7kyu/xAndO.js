// Check to see if a string has the same amount of 'x's and 
// 'o's. The method must return a boolean and be case insensitive.
//  The string can contain any char.

function XO(str) {
   let oCount = str.toLowerCase().split('').filter(x=> x.includes('o')).length
   let xCount = str.toLowerCase().split('').filter(x=> x.includes('x')).length
   return oCount === xCount
}
