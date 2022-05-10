//In this little assignment you are given a string of space separated numbers,
// and have to return the highest and lowest number.

function highAndLow(num){
    let nums = num.split(' ').map(Number).sort((a,b)=>a-b)
    return `${nums[nums.length-1]} ${nums[0]}`
  }
