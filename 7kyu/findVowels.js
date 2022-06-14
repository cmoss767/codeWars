function vowelIndices(word){
    let arr = []
    
   for(let i=0;i<word.length;i++){word[i].match(/[aeiouy]/ig) ? arr.push(i+1) : []}
      return arr
  }