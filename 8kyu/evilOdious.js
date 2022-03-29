function evil(n) {
    let bin = n.toString(2).replace(/0/g, '')
    return bin.length%2==0 ? "It's Evil!" : "It's Odious!"
  }