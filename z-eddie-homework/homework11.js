const reps = 100, pads = 55
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

/* Task 4
Requirement:
 Write a function named canFormString() which takes two string arguments and returns true if the second 
 string can be formed by rearranging the characters of first string. Return false otherwise.
 NOTE: This method is case-insensitive and ignore the white spaces.
Examples:
 canFormString("Hello", "Hi")​                      -> false
 canFormString("programming", "gaming")​            -> true
 canFormString("halogen", "hello")​                 -> false
 canFormString("CONVERSATION", "voices rant on")​   -> true
 canFormString("12", "123")                        -> false
*/
console.log('\n--- Task 4 ---' + ('-'.repeat(reps)))
// const canFormString = (str1, str2) => {
//     let arr1 = str1.toLowerCase().split(' ').join('').split('')
//     let arr2 = str2.toLowerCase().split(' ').join('').split('')
//     console.log (arr1)
//     console.log (arr2)
//     console.log('fff', arr2.filter( e => e.trim().length > 0 && arr1.includes(e) ))
//     let arr3 = arr2.filter( e => e.trim().length > 0 && arr1.includes(e))
//     console.log (arr2)
//     console.log (arr3)

// }

// arrOfGivens = [
//     ["Hello", "Hi"],
//     ["programming", "gaming"],
//     ["halogen", "hello"],
//     ["CONVERSATION", "voices rant on"],
//     ["12", "123"]
// ]
// for (let element of arrOfGivens) {
//     console.log(`canFormString('${element[0]}', ${element[1]})`.padEnd(pads, ' '), '->', canFormString(element[0], element[1]))
// }

/* Task 5
Requirement:
 Write a function named isAnagram() which takes two string arguments and returns true if the given strings 
 are anagram. Return false otherwise.
 NOTE: An anagram is a word or phrase formed by rearranging the letters of another word or phrase. In the context 
 of strings, checking if two strings are anagrams of each other means verifying if they contain the same characters
 in the same quantities, regardless of the order of those characters.
NOTE: This method is case-insensitive and ignore the white spaces.
Examples:
 isAnagram("Apple", "Peach")​               -> false
 isAnagram("listen", "silent")​             -> true
 isAnagram("astronomer", "moon starer")​    -> true
 isAnagram("CINEMA", "iceman")​             -> true
 isAnagram("123", "1234")                  -> false

*/
console.log('\n--- Task 4 ---' + ('-'.repeat(reps)))
const isAnagram = (str1, str2) => str1.toLowerCase().split(' ').join('').split('').sort().join('') === str2.toLowerCase().split(' ').join('').split('').sort().join('') 


arrOfGivens = [
    ["Apple", "Peach"],
    ["listen", "silent"],
    ["astronomer", "moon starer"],
    ["CINEMA", "iceman"],
    ["123", "1234"]
]
for (let element of arrOfGivens) {
    console.log(`isAnagram('${element[0]}', ${element[1]})`.padEnd(pads, ' '), '->', isAnagram(element[0], element[1]))
}

/* Task 6
Requirement:
Write a function named count() which takes an array of numbers and a boolean value as arguments. 
It will return the total count of the even numbers if the boolean value is true. And return the 
total count of the odd numbers if the boolean value is false. 
Examples:
 count([1, 5, 10], true)         -> 1
 count([3, 7, 2, 5, 10], false)  -> 3
 count([-1, 1, -2, 2], true)     -> 2
 count([0, -1, 15, 1], false)    -> 3
 count([1, 2, 3, 4, -4], true)   -> 3
*/
console.log('\n--- Task 6 ---' + ('-'.repeat(reps)))
const count = (arr, bool) => bool ? arr.reduce((acc, e) => e % 2 === 0 ? acc + 1 : acc, 0) : arr.reduce((acc, e) => e % 2 !== 0 ? acc + 1 : acc, 0)

arrOfGivens = [
    [[1, 5, 10], true],
    [[3, 7, 2, 5, 10], false],
    [[-1, 1, -2, 2], true],
    [[0, -1, 15, 1], false],
    [[1, 2, 3, 4, -4], true]
]
for (let element of arrOfGivens) {
    console.log(`count([ ${element[0].join(', ')} ], ${element[1]})`.padEnd(pads, ' '), '->', count(element[0], element[1]))
}

/* Task 8
Requirement:
Write a function named countOccurrence() which takes two string arguments and returns how many times 
that the first string can form the second string.
Examples:
countOccurrence("Javascript", "Java")      -> 1
countOccurrence("Hello", "World")          -> 0
countOccurrence("Can I can a can", "anc")​  -> 3
countOccurrence("Hello", "l")​              -> 2
countOccurrence("IT conversations", "IT")​  -> 2
*/
console.log('\n--- Task 8 ---' + ('-'.repeat(reps)))
const countOccurrence = (str1, str2) => {
    let arr1 = str1.toLowerCase().split(' ').join('').split('')
    let arr2 = str2.toLowerCase().split(' ').join('').split('')
    let arr2Unique = [... new Set(arr2)]
    let obj1 = {}
    let obj2 = {}
    arr2Unique.forEach(e => {
        obj1[e] = arr1.reduce((acc , eArr1) => eArr1 === e ? acc + 1 : acc, 0)
        obj2[e] = arr2.reduce((acc , eArr2) => eArr2 === e ? acc + 1 : acc, 0)
    })
    return Math.min(...Object.values(obj1))
}

arrOfGivens = [
    ["Javascript", "Java"],
    ["Hello", "World"],
    ["Can I can a can", "anc"],
    ["Hello", "l"],
    ["IT conversations", "IT"]
]
for (let element of arrOfGivens) {
    console.log(`countOccurrence('${element[0]}', '${element[1]}')`.padEnd(pads, ' '), '-> ', countOccurrence(element[0], element[1] ))
}

