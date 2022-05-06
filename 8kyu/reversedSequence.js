//given a number n, return an array 
//that has all the numbers from n counting down to 1
const reverseSeq = n => {
    let arr = []
    while(!n==0){
      arr.push(n)
      n--
    }
    return arr;
  };