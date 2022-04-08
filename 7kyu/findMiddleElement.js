// As a part of this Kata, you need to create a function 
// that when provided with a triplet, returns the index of 
// the numerical element that lies between the other two elements.

function gimme (triplet) {
   const arr = triplet.map(x=>x)
   const val = arr.sort((a,b)=>a-b)[1] 
   return triplet.indexOf(val)
}
