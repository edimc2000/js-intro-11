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
