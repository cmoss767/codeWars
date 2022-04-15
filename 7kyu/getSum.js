// Given two integers a and b, which can be positive or negative,
//  find the sum of all the integers between and including them and 
//  return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!



function getSum( a,b ){
    let arr = []
    if(a<b){
        while(a<=b){
            arr.push(a)
            a++
        }
     }else if(b<a){
        while(b<=a){
            arr.push(b)
            b++
        }
     }else{
         return a
     }
     return arr.reduce((a,c)=> a+c,0)
}
