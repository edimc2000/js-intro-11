const reps = 100, pads = 45;
/* Task 1 
Requirement:
 Write a function named fizzBuzz1() which takes a number argument and returns "Fizz" if 
 the given number is divisible by 3, "Buzz" if the number is divisible by 5, and "FizzBuzz" if 
 the number is divisible by both 3 and 5. Otherwise, it will return the number itself.​
Examples:
 fizzBuzz1(0)       -> "FizzBuzz"
 fizzBuzz1(1)       -> 1
 fizzBuzz1(3)       -> "Fizz"
 fizzBuzz1(5)       -> "Buzz"
 fizzBuzz1(30)      -> "FizzBuzz"
 fizzBuzz1(10)      -> "Buzz"
 fizzBuzz1(15)      -> "FizzBuzz"
 fizzBuzz1(-15)     -> "FizzBuzz"
*/

console.log('\n--- Task 1 ---' + ('-'.repeat(reps)));
const fizzBuzz1 = num => num % 5 === 0 &&  num % 3 === 0 ? 'FizzBuzz' : num % 5 === 0 ? 'Buzz' : num % 3 === 0  ? 'Fizz' : num;

let arrOfGivens = [ 0, 1, 3, 5, 30, 10, 15, -15 ];
for (let element of arrOfGivens) {
    console.log(`fizzBuzz1('${element}')`.padEnd(pads, ' '), '->', fizzBuzz1(element));
}

/* Task 2 
Requirement:
Write a function named fizzBuzz2() which takes a number argument and returns and array consist of 
numbers starting from 1 to given number. However, it will return "Fizz" for the numbers divided by 3, "Buzz" 
for the numbers divided by 5, and "FizzBuzz" for the numbers divided both by 3 and 5.
Examples:
 fizzBuzz2(3)   -> [ 1, 2, 'Fizz' ]
 fizzBuzz2(5)   -> [ 1, 2, 'Fizz', 4, 'Buzz' ]
 fizzBuzz2(10)  -> [ 1​, 2​, 'Fizz'​, 4​, 'Buzz'​, 'Fizz'​, 7, 8​, 'Fizz'​, 'Buzz' ]​
 fizzBuzz2(15)  -> [ 1​, 2​, 'Fizz'​, 4​, 'Buzz'​, 'Fizz'​, 7, 8​, 'Fizz'​, 'Buzz', 11, 'Fizz'. 13, 14,  'FizzBuzz' ]​
 fizzBuzz2(2)   -> [ 1, 2 ]
*/

console.log('\n--- Task 2 ---' + ('-'.repeat(reps)));
const fizzBuzz2 = num => {
    let arr = [];
    for (let i = 1; i <= num; i++) {arr.push(i)}
    return arr.map(e => e % 5 === 0 &&  e % 3 === 0 ? `'FizzBuzz'` : e % 5 === 0 ? `'Buzz'` : e % 3 === 0  ? `'Fizz'` : e)
}


arrOfGivens = [ 3, 5, 10, 15, 2 ];
for (let element of arrOfGivens) {
    console.log(`fizzBuzz2('${element}')`.padEnd(pads, ' '), '->', `[ ${fizzBuzz2(element).join(', ')} ]`);
}


/* Task 3 
Requirement:
 Write a function named findSumNumbers() which takes a string argument and returns sum
 of the all numbers appears in the string.
Examples:
 findSumNumbers("abc$")             -> 0
 findSumNumbers("a1b4c  6#")        -> 11
 findSumNumbers("ab110c045d")       -> 155
 findSumNumbers("525")              -> 525
 findSumNumbers("3 for 10 dollars") -> 13

*/

console.log('\n--- Task 3 ---' + ('-'.repeat(reps)));
const findSumNumbers = str => str.split(/[\Wa-z]/i).reduce((sum, curr) => sum + Number(curr), 0); 

arrOfGivens = [ "abc$", "a1b4c  6#", "ab110c045d", "525", "3 for 10 dollars" ];
for (let element of arrOfGivens) {
    console.log(`findSumNumbers('${element}')`.padEnd(pads, ' '), '->', findSumNumbers(element));
}

/* Task 4 
Requirement:
 Write a function named findBiggestNumber() which takes a string argument and returns 
 the biggest number appears in the string.
Examples:
 findBiggestNumber("abc$")              -> 0
 findBiggestNumber("a1b4c  6#")         -> 6
 findBiggestNumber("ab110c045d")        -> 110
 findBiggestNumber("525")               -> 525
 findBiggestNumber("3 for 10 dollars")  -> 10


*/

console.log('\n--- Task 4 ---' + ('-'.repeat(reps)));
const findBiggestNumber = str => {
    let arr = str.split(/[\Wa-z]/i).filter(e => e.length > 0 ).map(e => Number(e)).sort((a,b)=> a-b);
    return arr.length > 0 ? arr.at(-1) : 0;
}

arrOfGivens = [ "abc$", "a1b4c  6#", "ab110c045d", "525", "3 for 10 dollars" ];
for (let element of arrOfGivens) {
    console.log(`findBiggestNumber('${element}')`.padEnd(pads, ' '), '->', findBiggestNumber(element));
}


/* Task 5 
Requirement:
 Write a function named countOccurrencesOfCharacters() which takes a string argument and 
 returns the count of repeated characters in the String.​
 NOTE: If given String is empty, then return empty String.​
 NOTE: It is case sensitive.
Examples:
 countOccurrencesOfCharacters("")        -> ""
 countOccurrencesOfCharacters("abc")     -> "1a1b1c"
 countOccurrencesOfCharacters("abbcca")  -> "1a2b2c1a"
 countOccurrencesOfCharacters("aaAAa")   -> "2a2A1a”
 countOccurrencesOfCharacters("www" )    -> "3w"

*/

console.log('\n--- Task 5 ---' + ('-'.repeat(reps)));
const countOccurrencesOfCharacters = str => {
    let arr = str.split(''); 
    let result = []; 
    let testChar = arr[0]; 
    let counter = 1; 
    if (arr.length < 1) return ''; 

    for (let i = 1; i < arr.length; i++) {
        if (testChar === arr[i]) {
            counter++;
        } else { 
            result.push(`${counter}${testChar}`)
            testChar = arr[i];
            counter = 1;
        }  
    }
    result.push(`${counter}${testChar}`);
    return result.join('');
}

arrOfGivens = [ "", "abc", "abbcca", "aaAAa", "www" ];
for (let element of arrOfGivens) {
    console.log(`countOccurrencesOfCharacters('${element}')`.padEnd(pads, ' '), '->', countOccurrencesOfCharacters(element));
}


/* Task 6 
Requirement:
 Write a function named fibonacciSeries1() which takes a number n argument and 
 returns the n series of Fibonacci numbers as an array. ​
 REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
Examples:
 fibonacciSeries1(3) -> [0, 1, 1]
 fibonacciSeries1(5) -> [0, 1, 1, 2, 3]
 fibonacciSeries1(7) -> [0, 1, 1, 2, 3, 5, 8]
 fibonacciSeries1(8) -> [0, 1, 1, 2, 3, 5, 8, 13]
 fibonacciSeries1(1) -> [0]
 fibonacciSeries1(2) -> [0, 1]
*/

console.log('\n--- Task 6 ---' + ('-'.repeat(reps)));
const fibonacciSeries1 = num => {
    if (num <= 0) return [];
    if (num === 1) return [0];
    const result = [0, 1];
    for (let i = 2; i < num; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }
    return `[ ${result.slice(0, num).join(', ')} ]`;
}

arrOfGivens = [ 3, 5, 7, 8, 1, 2 ];

for (let element of arrOfGivens) {
    console.log(`fibonacciSeries1('${element}')`.padEnd(pads, ' '), '->', fibonacciSeries1(element));
}


/* Task 7

*/


console.log('\n--- Task 7 ---' + ('-'.repeat(reps)));



/* Task 8 
Requirement:
 Write a function named findUniques() which takes two array of number arguments and returns the array which has only the unique values from both given arrays.
 NOTE: If both arrays are empty, then return an empty array.​
 NOTE: If one of the array is empty, then return unique values from the other array.
Examples:
 findUniques([], [])                        -> []
 findUniques([], [1, 2, 3, 2])              -> [1, 2, 3]
 findUniques([1, 2, 3, 4], [3, 4, 5, 5])    -> [1, 2, 5]
 findUniques([8, 9], [9, 8, 9])             -> []
 findUniques([-1, -2], [1, 2])              -> [-1, -2, 1, 2]
*/

console.log('\n--- Task 8 ---' + ('-'.repeat(reps)));
const findUniques = (arr1, arr2) => [... new Set(arr1)].concat([... new Set(arr2)]).filter((e, i, arr) => arr.indexOf(e) === arr.lastIndexOf(e)); 

arrOfGivens = [ [[], []], [[], [1, 2, 3, 2]], [[1, 2, 3, 4], [3, 4, 5, 5]], [[8, 9], [9, 8, 9]], [[-1, -2], [1, 2]] ];
for (let element of arrOfGivens) {
    console.log(`findUniques([ ${element[0].join(', ')} ], [ ${element[1].join(', ')} ] )`.padEnd(pads, ' '), '->', findUniques(element[0], element[1]));
}



/* Task 9
Requirement:
 Write a function named isPowerOf3() which takes a number argument and returns true if given 
 number is equal to 3 power of the X. Otherwise, return false.​
 NOTE: Numbers that are power of 3 = 1, 3, 9, 27, 81, 243….
 NOTE: Ignore negative scenarios.
Examples:
 isPowerOf3(1)   -> true 
 isPowerOf3(2)   -> false
 isPowerOf3(3)   -> true
 isPowerOf3(27)  -> true
 isPowerOf3(100) -> false
 isPowerOf3(81)  -> true
 isPowerOf3(9)   -> true

*/

console.log('\n--- Task 9 ---' + ('-'.repeat(reps)));
const isPowerOf3 = num =>  num % 3 === 0; 

arrOfGivens = [ 1, 2, 3, 27, 100, 81, 9];
for (let element of arrOfGivens) {
    console.log(`isPowerOf3('${element}')`.padEnd(pads, ' '), '->', isPowerOf3(element));
}
