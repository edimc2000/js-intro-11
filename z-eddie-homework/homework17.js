const reps = 100, pads = 35
/* Task 1 
Requirement:
 Write a function named findMedian() which takes two arrays of numbers as its arguments 
 and return the median of the two sorted arrays. 
 NOTE: The median is the middle number of a sorted array. So the median of [1,3], [2] would be 2. 
 If the array has an even length, you are to find the average of the 2 middle numbers
Examples
 findMedian([1, 3], [2])       -> 2
 findMedian([1, 2], [3, 4])    -> 2.5
 findMedian([4], [3])          -> 3.5
 findMedian([4], [])           -> 4
 findMedian([0], [0,1])        ​-> 0
*/
console.log('\n--- Task 1 ---' + ('-'.repeat(reps)))
const findMedian = (arr1, arr2) => {
    const arr3 = arr1.concat(arr2).sort((a, b) => a - b)
    const middleIndex = ((arr3.length) / 2)
    const median = arr3.length % 2 === 0 && arr3.length !== 2 ? (arr3[middleIndex - 1] + arr3[middleIndex]) / 2
        : arr3.length === 2 ? arr3.reduce((sum, e) => sum + e, 0) / 2
            : arr3[Math.round((arr3.length - 1) / 2)]
    return median
}

let arrOfGivens = [[[1, 3], [2]], [[1, 2], [3, 4]], [[4], [3]], [[4], []], [[0], [0, 1]]]
for (let element of arrOfGivens) {
    console.log(`findMedian( [ ${element[0].join(', ')} ], [ ${element[1].join(', ')} ] )`.padEnd(pads, ' '), '-> ', findMedian(element[0], element[1]))
}

/* TASK 2
Requirement:
 Write a function named calculateFactorial() which takes a number as an argument and 
 returns the factorial of that number.
 Note: Factorial is the product of all positive integers less than or equal to a
 given positive integer and denoted by that integer and an exclamation point. 
 Thus, factorial seven is written 7!, meaning 1 × 2 × 3 × 4 × 5 × 6 × 7. 
 Factorial zero is defined as equal to 1.
Examples: 
 calculateFactorial(0)  -> 1
 calculateFactorial(1)  -> 1
 calculateFactorial(5)  -> 120
 calculateFactorial(6)  -> 720
 calculateFactorial(10) -> 3628800
 calculateFactorial(4)  -> 24
*/
console.log('\n--- Task 2 ---' + ('-'.repeat(reps)))
const factorial = num => {
    result = 1
    for (let index = num; index > 0; index--) {
        result *= index
    }
    return result
}

const calculateFactorial = num => num < 2 ? 1 : factorial(num)

arrOfGivens = [0, 1, 5, 6, 10, 4]
for (let element of arrOfGivens) {
    console.log(`calculateFactorial('${element}')`.padEnd(pads, ' '), '-> ', calculateFactorial(element))
}

/* TASK 3
Requirement:
 Write a function named calculateGCD() which takes two numbers as arguments and 
 returns the greatest common divisor of the two numbers.
 NOTE: GCD is a mathematical concept used to describe the largest number that 
 divides two or more integers without leaving a remainder. In other words, it is the 
 largest number that is a common factor of two or more numbers.
Examples:
 calculateGCD(8, 12)  -> 4
 calculateGCD(17, 5)  -> 1
 calculateGCD(48, 18) -> 6
 calculateGCD(0, 5)   -> 5
 calculateGCD(21, 14) -> 7
 calculateGCD(60, 48) -> 12
*/
console.log('\n--- Task 3 ---' + ('-'.repeat(reps)))
const denominators = num => {
    result = []
    for (let index = 1; index <= num; index++) {
        num % index === 0 ? result.push(index) : null
    }
    return result
}

const calculateGCD = (num1, num2) => {
    const numArr = [num1, num2].sort((a, b) => a - b)
    const denonimatorsArr = [denominators(numArr[0]), denominators(numArr[1])]
    return numArr.includes(0) ? numArr[1] : denonimatorsArr[1].filter((e, i) => denonimatorsArr[0].includes(e)).pop()
}

arrOfGivens = [[8, 12], [17, 5], [48, 18], [0, 5], [21, 14], [60, 48]]
for (let element of arrOfGivens) {
    console.log(`calculateGCD( ${element[0]}, ${element[1]} )`.padEnd(pads, ' '), '-> ', calculateGCD(element[0], element[1]))
}

/* TASK 4
Requirement:
 Write a function named calculateLCM() which takes two numbers as arguments and 
 returns the least common multiple of the two numbers.
 NOTE: LCM is a mathematical concept used to describe the largest number that 
 divides two or more integers without leaving a remainder. In other words, it is 
 the largest number that is a common factor of two or more numbers.
Examples:
 calculateLCM(8, 12) 	-> 24
 calculateLCM(17, 5) 	-> 85
 calculateLCM(48, 18) 	-> 144
 calculateLCM(0, 5) 	-> 0
 calculateLCM(21, 14) 	-> 42
 calculateLCM(60, 48) 	-> 240
*/
console.log('\n--- Task 4 ---' + ('-'.repeat(reps)))
const calculateLCM = (num1, num2) => {
    const numArr = [num1, num2].sort((a, b) => a - b)
    return numArr.includes(0) ? numArr[0] : (num1 * num2) / calculateGCD(num1, num2)
}

arrOfGivens = [[8, 12], [17, 5], [48, 18], [0, 5], [21, 14], [60, 48]]
for (let element of arrOfGivens) {
    console.log(`calculateLCM( ${element[0]}, ${element[1]} )`.padEnd(pads, ' '), '-> ', calculateLCM(element[0], element[1]))
}
