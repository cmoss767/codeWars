const isTriangle = (a,b,c)=>{
    if(a>0 && b>0 && c>0){
    let p = (a+b+c)/2
    return Math.sqrt(p*(p-a)*(p-b)*(p-c)) > 0
    }else{
        return false
    }
}
