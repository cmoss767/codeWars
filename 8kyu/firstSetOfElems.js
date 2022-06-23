function first(arr, n) {
    return n==0 ? [] : arr && n ? arr.slice(0, n) : arr.slice(0, 1)  
  }