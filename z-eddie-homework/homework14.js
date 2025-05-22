const reps = 100, pads = 65
/* Task 1 
Requirement:
 Write a function named repeatingX() which takes a string argument and 
 returns true if the letter x is followed by another x. Otherwise, return false.
 NOTE: This method should be case-insensitive.
Examples:
 repeatingX("xTechxGlobalx")    -> false
 repeatingX("Hello Xx World")   -> true
 repeatingX("x x")              -> false
 repeatingX("")                 -> false
 repeatingX("xxxxx")            -> true
*/

console.log('\n--- Task 1 ---' + ('-'.repeat(reps)))
const repeatingX = str => str.toLowerCase().trim().split('').reduce((acc, e, i, arr) => (e === 'x' && arr[i + 1] === 'x') ? acc = true : acc, false)

let arrOfGivens = ['xTechxGlobalx', 'Hello Xx World', 'x x', '', 'xxxxx']
for (let element of arrOfGivens) {
    console.log(`repeatingX(${element})`.padEnd(pads, ' '), '-> ', repeatingX(element))
}

/* Task 2
Requirement:
 Write a function named isPerfectSquare() which takes a number as an argument 
 and checks if it is a perfect square. It returns true if the number is a perfect 
 square and false otherwise.
 NOTE: A perfect square is a number that can be expressed as the product of an integer 
 by itself or as the second exponent of an integer. For example, 25 is a perfect 
 square because it is the product of integer 5 by itself, 5 × 5 = 25. However, 21 is 
 not a perfect square number because it cannot be expressed as the product of two 
 same integers.
Examples:
isPerfectSquare(25)  -> true
isPerfectSquare(24)  -> false
isPerfectSquare(0)   -> true
isPerfectSquare(1)   -> true
isPerfectSquare(-1)  -> false
isPerfectSquare(144) -> true
*/

console.log('\n--- Task 2---' + ('-'.repeat(reps)))
const isPerfectSquare = num => num ? num % Math.sqrt(num) === 0 : true

arrOfGivens = [25 , 24, 0, 1, -1, 144]
for (let element of arrOfGivens) {
    console.log(`isPerfectSquare(${element})`.padEnd(pads, ' '), '-> ', isPerfectSquare(element))
}
