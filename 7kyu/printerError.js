function printerError(s) {
    let count = 0
    for(let i=0;i<s.length;i++){
        if(s[i].match(/[n-z]/)){
            count++
        }
    }
    return `${count}/${s.length}`
}

