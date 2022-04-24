String.prototype.toAlternatingCase = function () {
    let str = ''
    for(let i =0;i< this.length;i++){
      if(this.charAt(i)==this.charAt(i).toUpperCase()){
        str+= this.charAt(i).toLowerCase()
      }else if(this.charAt(i)==this.charAt(i).toLowerCase()){
        str+= this.charAt(i).toUpperCase()
      }
    }
    return str
  }