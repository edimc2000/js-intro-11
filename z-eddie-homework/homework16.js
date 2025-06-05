const reps = 100, pads = 65
/* Task 1 
Requirement:
 Write a function named toInitials() which takes a string argument considered to be 
 full name and returns initials of the given full name.
 NOTE: Initials should be separated with a space and followed with a period.
 Assume you will always be given first name and last name only. 
Examples
 toInitials( "Joe Doe")      -> "J. D."
 toInitials( "Alex Reyes")   -> "A. R."
 toInitials( "Tom Cruise")   -> "T. C."
 toInitials( "Bruce Willis") -> "B. W."
 toInitials( "Ja Le")        -> "J. L."
*/
console.log('\n--- Task 1 ---' + ('-'.repeat(reps)))
const toInitials = str => str.split(' ').map(e => `${e.toUpperCase()[0]}.`).join(' ')

let arrOfGivens = ['Joe Doe', 'Alex Reyes', 'Tom Cruise', 'Bruce Willis', 'Ja Le']
for (let element of arrOfGivens) {
    console.log(`toInitials('${element}')`.padEnd(pads, ' '), '-> ', toInitials(element))
}

/* Task 2
Requirement:
 Write a function named hasNumbers() which takes a string argument and returns true 
 if there is a number and false if there isn’t. 
Examples:
 hasNumbers("")                     -> false
 hasNumbers("John is 34 years old") -> true
 hasNumbers("Hello 3")              -> true
 hasNumbers("125$")                 -> true
 hasNumbers("   a   ")              -> false
 hasNumbers("      ")               -> false
 hasNumbers("!@#$%^&*()_+")         -> false
*/
console.log('\n--- Task 2 ---' + ('-'.repeat(reps)))
const hasNumbers = str => str.split('').reduce((result, e) => /[0-9]/.test(e) ? result = true : result, false)

arrOfGivens = ['', 'John is 34 years old', 'Hello 3', '125$', '   a   ', '      ', '!@#$%^&*()_+']
for (let element of arrOfGivens) {
    console.log(`hasNumbers('${element}')`.padEnd(pads, ' '), '-> ', hasNumbers(element))
}

/* Task 3
Requirement:
 Write a function named elementLength() which takes an array argument and returns 
 the length of each element as a separate array.
Examples:
 elementLength( [ "Hello", "World" ] )                         -> [ 5, 5 ]
 elementLength( [ "Apple", "Banana", "Orange", "Pear" ] )      -> [ 5, 6, 6, 4 ]
 elementLength( ["BMW", "Mercedes", "Audi" ] )                 -> [ 3, 8, 4 ]
 elementLength( [ ] )                                          -> [ ]
 elementLength( [ "Trampoline", "", "Tennis", "Basketball" ] ) -> [ 10, 0, 6, 10 ]
*/
console.log('\n--- Task 3 ---' + ('-'.repeat(reps)))
const elementLength = arr => arr.map(e => e.length)

arrOfGivens = [
    ["Hello", "World"],
    ["Apple", "Banana", "Orange", "Pear"],
    ["BMW", "Mercedes", "Audi"],
    [],
    ["Trampoline", "", "Tennis", "Basketball"]
]
for (let element of arrOfGivens) {
    console.log(`elementLength([ ${element.map(e => `'${e}'`).join(', ')} ])`.padEnd(pads, ' '), '-> ', elementLength(element))
}

/* Task 4
Requirement:
 Write a function named isArraySumEvenOrOdd() which takes an array of numbers and 
 calculates if the sum of its elements is even or odd.
 Note: If the array is empty return even.
Examples:
 isArraySumEvenOrOdd( [ ] )            -> "even"
 isArraySumEvenOrOdd( [ 0,-1,-5 ] )    -> "even"
 isArraySumEvenOrOdd( [ 7,1, 8,1 ] )   ->  "odd”
 isArraySumEvenOrOdd( [ 0,0 ] )        ->  "even"
 isArraySumEvenOrOdd( [ 1,1,1,1,1 ] )  ->  "odd” 
*/
console.log('\n--- Task 4 ---' + ('-'.repeat(reps)))
const isArraySumEvenOrOdd = arr => arr.length ? arr.reduce((sum, e) => sum + e, 0) % 2 === 0 ? 'even' : 'odd' : 'even'

arrOfGivens = [
    [],
    [0, -1, -5],
    [7, 1, 8, 1],
    [0, 0],
    [1, 1, 1, 1, 1]
]

for (let element of arrOfGivens) {
    console.log(`isArraySumEvenOrOdd([ ${element.map(e => `${e}`).join(', ')} ])`.padEnd(pads, ' '), '-> ', isArraySumEvenOrOdd(element))
}

/* Task 5
Requirement:
 Write a function named reverse() which takes a string argument and returns the given string reversed. 
Examples:
 reverse("Hello World")       -> "dlroW olleH"
 reverse("TechGlobal")        -> "labolGhceT"
 reverse("Basketball is fun") -> "nuf si llabteksaB"
 reverse("")                  -> ""
 reverse("Apples 456")        -> "654 selppA"
*/
console.log('\n--- Task 5 ---' + ('-'.repeat(reps)))
const reverse = str => str.split('').reverse().join('')

arrOfGivens = [
    'Hello World',
    'TechGlobal',
    'Basketball is fun',
    '',
    'Apples 45'
]

for (let element of arrOfGivens) {
    console.log(`reverse('${element}')`.padEnd(pads, ' '), '-> ', reverse(element))
}

/* Task 5
Requirement:
 Write a function named reverseWords() which takes a string argument and returns a string with each word within that string reversed but still in the same order as the initial string. 
Examples:
 reverseWords("Hello World")       -> "olleH dlroW"
 reverseWords("TechGlobal")        -> "labolGhceT"
 reverseWords("Basketball is fun") -> "llabteksaB si nuf"
 reverseWords("")                  -> ""
 reverseWords("Apples 456")        -> "selppA 654"
*/
console.log('\n--- Task 6---' + ('-'.repeat(reps)))
const reverseWords = str => str.split(' ').map(e => reverse(e)).join(' ')

arrOfGivens = [
    'Hello World',
    'TechGlobal',
    'Basketball is fun',
    '',
    'Apples 45'
]

for (let element of arrOfGivens) {
    console.log(`reverseWords('${element}')`.padEnd(pads, ' '), '-> ', reverseWords(element))
}
