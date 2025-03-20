/* Task 1 
Requirement:
 Write a function named hasUpperCase() which takes a string argument and return true 
 if there is an uppercase letter and false otherwise.
Examples:
 hasUpperCase("javascript") -> false
 hasUpperCase("John")       -> true
 hasUpperCase("$125.0")     -> false
 hasUpperCase("")           -> false
 */
console.log ('--- Task 1 ---')
const hasUpperCase = string => /[A-Z]/.test(string); 

const arr1 = [ 'javascript', 'John', '$125.0', '' ]; 
for (let element of arr1){
    console.log(`hasUpperCase('${element}')`.padEnd(30,' '), '->', hasUpperCase(element)); 
}

/* Task 2 
Requirement:
 Write a function named noDigit() which takes a string argument and returns a new string 
 with all digits removed from the original string​.
Examples:
 noDigit("")                     -> ""
 noDigit("Javascript")           -> "Javascript"
 noDigit("123Hello")             -> "Hello"
 noDigit("123Hello World149") 	-> "Hello World”
 noDigit("123Tech456Global149") 	-> "TechGlobal"
*/
console.log ('\n--- Task 2 ---');
const noDigit = string => string.trim().split('').filter(char => /[^0-9]/.test(char)).join(''); 

const arr2 = [ '', 'Javascript', '123Hello', '123Hello World149', '123Tech456Global149' ]; 
for (let element of arr2){
    console.log(`noDigit('${element}')`.padEnd(30,' '), '->' , noDigit(element)); 
}

/* Task 3
Requirement:
 Write a function named noVowel() which takes a string argument and returns a new string 
 with all vowels removed from the original string​.
Examples:
 noVowel("TechGlobal")  -> "TchGlbl"
 noVowel("AEOxyz")      -> "xyz"
 noVowel("Javascript")  -> "Jvscrpt"
 noVowel("")            -> ""
 noVowel("125$")        -> "125$"
*/
console.log ('\n--- Task 3 ---');
const noVowel = string => string.trim().split('').filter(char => /[^aeiou]/i.test(char)).join(''); 

const arr3 = [ 'TechGlobal', 'AEOxyz', 'Javascript', '', '125$' ]; 
for (let element of arr3){
    console.log(`noVowel('${element}')`.padEnd(30,' '), '->' , noVowel(element)); 
}

/* Task 4
Requirement:
 Write a function named no13() which takes an array of numbers as argument and return 
 a new array with all 13s replaced with 0s. ​
Examples:
 no13([1, 2, 3 ,4])          -> [1, 2, 3 ,4] 
 no13([13, 2, 3])            -> [0, 2, 3]
 no13([13, 13, 13 , 13, 13]) -> [0, 0, 0, 0, 0]
 no13([])                    -> []

*/
console.log ('\n--- Task 4 ---');
const no13 = arr => arr.map(element => element === 13 ? 0 : element); 

const arr4 = [ [1, 2, 3 ,4], [13, 2, 3], [13, 13, 13 , 13, 13], [] ]; 
for (let element of arr4){
    console.log(`no13([${element}])`.padEnd(30,' '), '->' , no13(element)); 
}

/* Task 5
Requirement:
 Write a function named middleInt() which takes three number arguments and return the middle number. ​
Examples:
 middleInt(1, 2, 2)     -> 2
 middleInt(5, 5, 8)     -> 5
 middleInt(5, 3, 5)     -> 5
 middleInt(1, 1, 1)     -> 1
 middleInt(-1, 25, 10)  -> 10

*/
console.log ('\n--- Task 5 ---');
const middleInt = (num1, num2, num3) => [num1, num2, num3].sort((a,b) => a-b)[1]; 

const arr5 = [ [1, 2, 2] , [5, 5, 8], [5, 3, 5], [1, 1, 1], [-1, 25, 10] ]; 
for (let element of arr5){
    console.log(`middleInt(${element[0]}, ${element[1]}, ${element[2]})`.padEnd(30,' '), '->' , middleInt(element[0], element[1], element[2])); 
}

/* Task 6
Requirement:
 Write a function named sumOfDigits() which takes a string argument and returns sum 
 of all digits from the original string. ​
Examples:
 sumOfDigits("Javascript")       -> 0
 sumOfDigits("John’s age is 29") -> 11
 sumOfDigits("$125.0")           -> 8
 sumOfDigits("")                 -> 0
*/
console.log ('\n--- Task 6 ---');
const sumOfDigits = string => string.split('').reduce((sum, curr) => /[0-9]/.test(curr) ? sum + Number(curr) : sum, 0); 

const arr6 = [ 'Javascript', 'John’s age is 29', '$125.0', '' ]; 
for (let element of arr6){
    console.log(`sumOfDigits('${element}')`.padEnd(35,' '), '->' , sumOfDigits(element)); 
}

/* Task 7
Requirement:
 Write a function named arrFactorial() which takes an array of numbers as argument and  
return the array with every number replaced with their factorials.
Examples:
 arrFactorial([1, 2, 3 ,4])    -> [1, 2, 6, 24]
 arrFactorial([0, 5])          -> [1,120]
 arrFactorial([5 , 0, 6])      -> [120, 1, 720]
 arrFactorial([])              -> []
*/
console.log ('\n--- Task 7 ---');
const factorial  = num => {
    result = 1; 
    if (num < 2) return result; 
    for (let i = num ; i >= 2; i--){
        result *= i; 
    }
    return result; 
};
const arrFactorial = arr => arr.map(num => factorial(num)); 

const arr7 = [ [1, 2, 3 ,4], [0, 5], [5 , 0, 6], [] ]; 
for (let element of arr7){
    console.log(`arrFactorial([${element}])`.padEnd(30,' '), '->' , arrFactorial(element)); 
}

/* Task 8
Requirement:
 Write a function named categorizeCharacters() which takes a string word as argument and return an array 
 as letters at index of 0, digits at index of 1 and specials at index of 2. 
Examples:
 categorizeCharacters("1234") 	-> [ '' , '1234', '' ] 
 categorizeCharacters("abc123$#%") 	-> [ 'abc', '123', '$#%' ]
 categorizeCharacters("12ab$%3c%") 	-> [ 'abc', '123', '$%%' ]

*/
console.log ('\n--- Task 8 ---');
const categorizeCharacters = string => {
    return [
        string.trim().split('').filter(char => /[a-z]/gi.test(char)).join(''),
        string.trim().split('').filter(char => /[0-9]/.test(char)).join(''),
        string.trim().split('').filter(char => /[^0-9a-z]/i.test(char)).join('')
    ]
}; 

const arr8 = [ '1234', 'abc123$#%', '12ab$%3c%']; 
for (let element of arr8){
    console.log(`categorizeCharacters(${element}])`.padEnd(30,' '), '->' , categorizeCharacters(element)); 
}
