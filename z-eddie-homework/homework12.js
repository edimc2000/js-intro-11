const reps = 100, pads = 55
/* Task 1 
Requirement:
 Write a function named makeNegative() that takes a number and returns its negative value.
 NOTE: The number can be negative already, in which case no change is required.
 NOTE: Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense. So, zero will stay as zero.
Examples
 makeNegative(10)    -> -10
 makeNegative( -7)   -> -7
 makeNegative( 0)    -> 0
 makeNegative(0.45)  -> -0.45

*/
console.log('\n--- Task 1 ---' + ('-'.repeat(reps)))
const makeNegative = num =>{ return num === 0 ? 0 : num * -1}

let arrOfGivens = [ 10, 7, 0, 0.45 ]
for (let element of arrOfGivens) {
    console.log(`makeNegative(${element})`.padEnd(pads, ' '), '-> ', makeNegative(element))
}
