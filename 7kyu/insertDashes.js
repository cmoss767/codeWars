function insertDash(num) {
    let str = num.toString()
    let str1 = ''
    for(let i = 0;i<str.length;i++){
      if(+str[i]%2!=0 && +str[i+1]%2!=0  ){
        str1+= str[i] + '-'
      }else{
        str1 += str[i]
      }
    }
    return str1.endsWith("-") ? str1.slice(0, -1) : str1
    }