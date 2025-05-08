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
const makeNegative = num => { return num === 0 ? 0 : num * -1 }

let arrOfGivens = [10, 7, 0, 0.45]
for (let element of arrOfGivens) {
    console.log(`makeNegative(${element})`.padEnd(pads, ' '), '-> ', makeNegative(element))
}

/* Task 2 
Requirement:
 Write a function isSumEvenOrOdd() which takes three numbers as arguments and determines if the sum of these numbers is odd or even.
Examples:
 isSumEvenOrOdd(0, 1, 4)   -> "odd"
 isSumEvenOrOdd(0, -1, -5) -> "even"
 isSumEvenOrOdd(0, 0, 0)   -> "even"
 isSumEvenOrOdd(7, 1, 9)   -> "odd"
isSumEvenOrOdd(1, 1, 1)    -> "odd"
*/
console.log('\n--- Task 2 ---' + ('-'.repeat(reps)))
const isSumEvenOrOdd = (...args) => args.reduce((acc, e) => acc + e, 0) % 2 === 0 ? 'even' :'odd'

arrOfGivens = [[0, 1, 4], [0, -1, -5], [0, 0, 0], [7, 1, 9], [1, 1, 1]]
for (let element of arrOfGivens) {
    console.log(`isSumEvenOrOdd(${element[0]}, ${element[1]}, ${element[2]})`.padEnd(pads, ' '), '-> ', isSumEvenOrOdd(element[0], element[1], element[2]))
}


/* Task 3 
Requirement:
 Write a function named decimal2() which takes an array of numbers as an argument and returns the array with the same numbers 
 rounded up or down and represented with only two decimals.
Examples:
 decimal2( [94.356, 8.9752] )                -> [ 94.36, 8.98 ]
 decimal2( [76.62, 128.4, 84] )              -> [ 76.62, 128.4, 84 ]
 decimal2( [20987, 3.53245, 12.345, 32.9] )  -> [ 20987, 3.53, 12.35, 32.90 ]
 decimal2( [ ] )                             -> [  ]
 decimal2( [4.35623, 8.9742] )               -> [ 4.36, 8.97 ]

*/
console.log('\n--- Task 3 ---' + ('-'.repeat(reps)))
const decimal2 = arr => arr.map( e => Number(e.toFixed(2)))

arrOfGivens = [ [94.356, 8.9752], [76.62, 128.4, 84], [20987, 3.53245, 12.345, 32.9], [], [4.35623, 8.9742]]
for (let element of arrOfGivens) {
    console.log(`decimal2([ ${element.join(', ')} ])`.padEnd(pads, ' '), '-> ', decimal2(element))
}
