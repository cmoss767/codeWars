function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    let arr = [age1,age2,age3,age4,age5,age6,age7,age8].map(x=>Math.pow(x,2))
    let num = arr.reduce((a,c)=>a+c)
    return Math.floor((Math.sqrt(num))/2)
  }