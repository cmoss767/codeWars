// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).


function multipleOfIndex(array) {
    let arr = []
    for(let i =1;i<array.length;i++){
      if(array[i]%i==0){
        arr.push(array[i])
      }
    }
    return arr
  }