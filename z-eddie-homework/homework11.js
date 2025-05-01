const reps = 100, pads = 75
/* Task 1 
Requirement:
 Write a function named countPalindrome() which takes a string and returns the number of  palindrome words.
 Note: A palindrome word is a word that reads the same forwards and backwards. Example: level, radar, deed, refer.
Examples:
 countPalindrome("Mom and Dad"​)                             -> 2
 countPalindrome("See you at noon")                         -> 1
 countPalindrome("Kayak races attracts racecar drivers")    -> 2
 countPalindrome("")                                        -> 0
 countPalindrome("No palindrome here")                      -> 0
*/
console.log('\n--- Task 1 ---' + ('-'.repeat(reps)))
const isPalindrome = str => {
    let str1 = str.toLowerCase().split('').join('');
    let str2 = [...str1].reverse().join('');
    return str1 === str2
}

const countPalindrome = str => {
    return str.trim().length < 1 ? 0 : str.split(' ').map(e => isPalindrome(e)).filter(e => e === true).length
}

let arrOfGivens = ['Mom and Dad', 'See you at noon', 'Kayak races attracts racecar drivers', '', 'No palindrome here']
for (let element of arrOfGivens) {
    console.log(`countPalindrome('${element}')`.padEnd(pads, ' '), '-> ', countPalindrome(element))
}

/* Task 2
Requirement:
 Write a function named sum() which takes an array of numbers and a boolean value as arguments. It will return 
 the sum of the numbers positioned at even indexes if true. And, return sum of numbers positioned at odd indexes if false.
Examples:
 sum([1, 5, 10], true)          -> 11
 sum([3, 7, 2, 5, 10], false)   -> 12
 sum([-1, 1, -2, 2], true)      -> -3
 sum([0, -1, 15, 1], false)     -> 0
 sum([1, 2, 3, 4, -4], true)    -> 0
*/
console.log('\n--- Task 2 ---' + ('-'.repeat(reps)))
const sum = (arr, bool) => {
    return bool ? arr.reduce((acc, e, i) => i % 2 === 0 ? acc + e : acc, 0)
        : arr.reduce((acc, e, i) => i % 2 !== 0 ? acc + e : acc, 0)
}

arrOfGivens = [
    [[1, 5, 10], true],
    [[3, 7, 2, 5, 10], false],
    [[-1, 1, -2, 2], true],
    [[0, -1, 15, 1], false],
    [[1, 2, 3, 4, -4], true]
]
for (let element of arrOfGivens) {
    console.log(`sum([ ${element[0].join(', ')} ], ${element[1]})`.padEnd(pads, ' '), '->', sum(element[0], element[1]))
}

/* Task 3
Requirement:
 Write a function named nthChars() which takes a string and a number as arguments and returns the string 
 back with every nth characters.​
Examples:
 nthChars("Java", 2)           -> "aa"
 nthChars("JavaScript", 5)​     -> "St"
 nthChars("Java", 3)​           -> "v"
 nthChars("Hi", 4)​             -> ""
 nthChars("0123456789", 2)     -> "13579" 
*/
console.log('\n--- Task 2 ---' + ('-'.repeat(reps)))
const nthChars = (str, num) => {
    return `'${str.split('').filter((e, i) => (i + 1) % num === 0 ? e : null).join('')}'`
}

arrOfGivens = [
    ["Java", 2],
    ["JavaScript", 5],
    ["Java", 3],
    ["Hi", 4],
    ["0123456789", 2]
]
for (let element of arrOfGivens) {
    console.log(`nthChars('${element[0]}', ${element[1]})`.padEnd(pads, ' '), '->', nthChars(element[0], element[1]))
}