// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

// Square all numbers k (0 <= k <= n) between 0 and n.

// Count the numbers of digits d used in the writing of all the k**2.

// Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.

function nbDig(n, d) {
    let k = 0
    let arr = ''
    for(let i=0; i<=n;i++){
        k = Math.pow(i, 2)
        arr = arr + k.toString()  
    }
    return arr.split('').filter(x=>x===d.toString()).length
}
