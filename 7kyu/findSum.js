// Your task is to write function findSum.

// Upto and including n, this function will return 
// the sum of all multiples of 3 and 5.

function findSum(n) {
    let arr = []
    while(n>0){
        if(n%3==0 || n%5==0){
            arr.push(n)
        }
        n--
    }
   return arr.reduce((a,c)=>a+c,0)
  }

