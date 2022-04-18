// Mr. Scrooge has a sum of money 'P' that he wants to invest. 
// Before he does, he wants to know how many years 'Y' this sum 'P' 
// has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly.
//  After paying taxes 'T' for the year the new sum is re-invested.

// Note to Tax: not the invested principal is taxed, 
// but only the year's accrued interest

function calculateYears(principal, interest, tax, desired) {
    let result = 0
    for(let i =1;principal<desired;i++){
        principal += ((principal * interest) -  (principal * interest * tax))
        result = i
        console
    }
    return result
}
