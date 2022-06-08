//find dupliicates in a list and remove it so that only unique items are left

function distinct(a) {
    return [...new Set(a)]
  }