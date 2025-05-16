const reps = 100, pads = 65
/* Task 1 
Requirement:
 Write a function named countVC() which takes a string argument and returns an object with the count of vowels and consonants.
Examples:
 countVC("Hello")       -> {vowels: 2, consonants: 3}
 countVC("Programming") ​-> {vowels: 3, consonants: 8}
 countVC("123AbC")      -> {vowels: 1, consonants: 2}
 countVC("123!@#xyz")​   -> {vowels: 0, consonants: 3}
 countVC("")            -> {vowels: 0, consonants: 0}

*/
console.log('\n--- Task 1 ---' + ('-'.repeat(reps)))
const countVC = str => {
    const vowels = str.split('').reduce((acc, e) => /[aeiou]/i.test(e) ? acc + 1: acc, 0 )
    const consonants = str.split('').reduce((acc, e) => /[^\W^\d^aeiou]/i.test(e) ? acc + 1: acc, 0)

    return {'vowels': vowels, 'consonants': consonants}
}

let arrOfGivens = ['Hello', 'Programming', '123AbC', '123!@#xyz', '']
for (let element of arrOfGivens) {
    console.log(`countVC(${element})`.padEnd(pads, ' '), '-> ', countVC(element))
}

/* Task 2
Requirement:
Write a function named countChars() which takes a string argument and returns an object with the count of letters, numbers, and specials.
NOTE: If the count of a category is 0 then it should not be in the object. Also spaces do not count towards any category
Examples:
 countChars("Hello")            -> {letters: 5}
 countChars("Programming 123")​  -> {letters: 11, numbers: 3}
 countChars("123AbC!@#")​        -> {letters: 3, numbers: 3, specials: 3}
 countChars("0987654321")       -> {numbers: 10}
 countChars("     ")​            -> {}
 countChars("")                 -> {}
*/
console.log('\n--- Task 2 ---' + ('-'.repeat(reps)))
const counter = (str,regex) =>  str.trim().split('').reduce((acc, e) => regex.test(e) ? acc + 1: acc, 0)

const countChars = str => {
    const letters = counter(str, /[a-z]/i)
    const numbers = counter(str, /[\d]/)
    const specials = counter(str, /[^\s \w]/)
   
    let result ={}
    letters ? result['letters'] = letters : null 
    numbers ? result['numbers'] = numbers : null 
    specials ? result['specials'] = specials : null 
    return result
}

arrOfGivens = ['Hello', 'Programming 123', '123AbC!@#', '0987654321', '     ','']
for (let element of arrOfGivens) {
    console.log(`countChars(${element})`.padEnd(pads, ' '), '-> ', countChars(element))
}

