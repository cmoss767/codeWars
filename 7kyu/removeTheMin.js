// Given an array of integers, remove the smallest value. 
// Do not mutate the original array/list. If there are multiple 
// elements with the same value, remove the one with a lower index. 
// If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.


function removeSmallest(nums) {
    let copy = nums.map(x=>x)
    let minIndex = copy.indexOf(Math.min(...copy))
    copy.splice(minIndex,1)
    return copy
    
}

removeSmallest([2, 2, 1, 2, 1])