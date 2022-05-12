// You are going to be given a word. Your job is to return the
//  middle character of the word. If the word's length is odd, 
//  return the middle character. If the word's length is even, 
//  return the middle 2 characters.

function getMiddle(s){

     s.length%2==0 ? console.log( s.substring(s.length/2 -1 ,s.length/2+1 ) ) : console.log( s.substring(s.length/2 ,s.length/2+1) )
//   if(s.length %2==0){
//     console.log( s.substring(s.length/2 -1 ,s.length/2+1 ) )
//     }
// else if(s.length%2!=0){
//     console.log( s.substring(s.length/2 ,s.length/2+1) )
   
//   }
}

getMiddle('chemistrys')