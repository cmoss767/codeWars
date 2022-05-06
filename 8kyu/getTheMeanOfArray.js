//Return the average of a given array 
//rounded down to its nearest integer.

function getAverage(marks){
    return Math.floor(marks.reduce((a,c)=>a + c,0)/marks.length)
    }