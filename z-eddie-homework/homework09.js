const reps = 100, pads = 75;
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