function initializeNames(name){
    let arr = name.split(' ')
    if(arr.length<2){return arr[0]}
    let initials = arr.map(x=>x[0]+'.').slice(1,-1).join(' ')
    return `${arr[0]}${initials ? ` ${initials} ` : ` `}${arr[arr.length-1]}`
    }