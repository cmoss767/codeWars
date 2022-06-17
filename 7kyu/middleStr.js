function middleMe(N, X, Y){
    let str = X
    for(let i =0;i<N;i++){
      i%2==0 ? str = Y+str : str = str + Y
    }
  return N%2==0 ? str : X
}