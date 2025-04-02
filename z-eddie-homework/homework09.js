const reps = 100, pads = 35;
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
const findSumNumbers = str => str.split(/[\Wa-z]/i).reduce((sum, curr) => Number(sum) + Number(curr), 0); 

arrOfGivens = [ "abc$", "a1b4c  6#", "ab110c045d", "525", "3 for 10 dollars" ];
for (let element of arrOfGivens) {
    console.log(`findSumNumbers('${element}')`.padEnd(pads, ' '), '->', findSumNumbers(element));
}
