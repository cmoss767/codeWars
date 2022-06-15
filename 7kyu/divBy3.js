function divisibleByThree(str){
    return str.split('').reduce((a,c)=>a+ +c,0) %3 == 0
  }