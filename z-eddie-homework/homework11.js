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
