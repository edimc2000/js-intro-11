/* Task 1 
Requirement:
 Write a function named noSpace() which takes a string as argument and 
 returns a new string with all the spaces removed.
Examples:
 noSpace("")                    -> ""
 noSpace("Javascript")          -> "Javascript"
 noSpace("    Hello   ")        -> "Hello"
 noSpace(" Hello World   ")     -> "HelloWorld”
 noSpace("Tech Global")         -> "TechGlobal"
*/
// console.log('--- Task 1 ---'); 
// const noSpace = string => string.trim(); 

// console.log('noSpace("")                ->', noSpace(""));
// console.log('noSpace("Javascript")      ->', noSpace("Javascript"));
// console.log('noSpace("  Hello  ")       ->', noSpace("  Hello  "));
// console.log('noSpace(" Hello World  ")  ->', noSpace(" Hello World  "));
// console.log('noSpace("Tech Global")     ->', noSpace("Tech Global"));

/* Task 2 
Requirement:
Write a function named replaceFirstLast() which takes a string argument and 
returns a new string with the first and last characters replaced.
 NOTE: If the length is less than 2, return an empty string.
 NOTE: Ignore extra spaces before and after the string.
Examples:
 replaceFirstLast("")            ->  ""
 replaceFirstLast("Hello")       ->  "oellH"
 replaceFirstLast("Tech Global") -> "lech GlobaT"
 replaceFirstLast("A")           -> ""
 replaceFirstLast("    A      ") -> ""
*/
// console.log('--- Task 2 ---'); 
// const replaceFirstLast = string => string.trim().length < 2 ? '' : string.trim().at(-1) + string.trim().slice(1, string.trim().length-1) + string.trim().at(0);  

// console.log('replaceFirstLast("")            -> ', replaceFirstLast("")); 
// console.log('replaceFirstLast("Hello")       -> ', replaceFirstLast("Hello ")); 
// console.log('replaceFirstLast("Tech Global") -> ', replaceFirstLast("Tech Global")); 
// console.log('replaceFirstLast("A")           -> ', replaceFirstLast("A")); 
// console.log('replaceFirstLast("   A  ")      -> ', replaceFirstLast("  A  ")); 


/* Task 3
Requirement:
Write a function named hasVowel() which takes a string argument and 
returns true if the string has a vowel, returns false if the string doesn’t 
contain any vowel letter.
 NOTE: Vowels are = a, e, o, u, i.
 NOTE: Ignore upper/lower cases.
Examples:
 hasVowel("")             -> false
 hasVowel("Javascript")   -> true
 hasVowel("Tech Global")  -> true
 hasVowel("1234")         -> false
 hasVowel("ABC")          -> true
*/
// console.log('--- Task 3 ---'); 
// const hasVowel = string => /[aeiou]/i.test(string);

// console.log('hasVowel("")            -> ', hasVowel("")); 
// console.log('hasVowel("Javascript")  -> ', hasVowel("Javascript")); 
// console.log('hasVowel("Tech Global") -> ', hasVowel("Tech Global")); 
// console.log('hasVowel("1234")        -> ', hasVowel("1234")); 
// console.log('hasVowel("ABC")         -> ', hasVowel("ABC")); 

/* Task 4
Requirement:
 Write a function named checkAge() which takes a number argument to be 
 considered as the yearOfBirth and returns a message below based on the given year.
 If the age is less than 16, then print "AGE IS NOT ALLOWED”"
 If the age is 16 or more, then print "AGE IS ALLOWED"
 If the age is more than 120 or a future year, print "AGE IS NOT VALID"
 NOTE: Consider someone born in 2013 is 10 years old as of 2023.
Examples:
 checkAge(2015) -> "AGE IS NOT ALLOWED"
 checkAge(2007) -> "AGE IS ALLOWED"
 checkAge(2050) -> "AGE IS NOT VALID"
 checkAge(1920) -> "AGE IS ALLOWED"
 checkAge(1800) -> "AGE IS NOT VALID"
*/
// console.log('--- Task 4 ---'); 
// const checkAge = yearOfBirth => {
//     const age = Number(new Date( Date.now()).toDateString().slice(-4)) - yearOfBirth;
//     return age < 0 ? 'AGE IS NOT VALID '
//      : age < 16 ? 'AGE IS NOT ALLOWED'
//      : age > 16 && age < 120 ? 'AGE IS ALLOWED'
//      : age > 120 ? 'AGE IS NOT VALID'
//      : null; 
// }

// console.log('checkAge(2015) -> ', checkAge(2015)); 
// console.log('checkAge(2007) -> ', checkAge(2007)); 
// console.log('checkAge(2050) -> ', checkAge(2050)); 
// console.log('checkAge(1920) -> ', checkAge(1920)); 
// console.log('checkAge(1800) -> ', checkAge(1800)); 


/* Task 5
Requirement:
 Write a function named averageOfEdges() which takes three number arguments 
 and will return average of min and max numbers​.
Examples:
 averageOfEdges(0, 0, 0)     -> 0
 averageOfEdges(0, 0, 6)     -> 3
 averageOfEdges(-2, -2, 10)  -> 4
 averageOfEdges(-3, 15, -3)  -> 6
 averageOfEdges(10, 13, 20)  -> 15
*/
// console.log('--- Task 5 ---'); 
// const averageOfEdges = (num1, num2, num3) => (Math.min(num1, num2, num3) + Math.max(num1, num2, num3)) / 2;

// console.log('averageOfEdges(0, 0, 0)    -> ', averageOfEdges(0, 0, 0)); 
// console.log('averageOfEdges(0, 0, 6)    -> ', averageOfEdges(0, 0, 6)); 
// console.log('averageOfEdges(-2, -2, 10) -> ', averageOfEdges(-2, -2, 10)); 
// console.log('averageOfEdges(-3, 15, -3) -> ', averageOfEdges(-3, 15, -3)); 
// console.log('averageOfEdges(10, 13, 20) -> ', averageOfEdges(10, 13, 20)); 



/* Task 6
Requirement:
 Write a function named noA() which takes an array of strings as argument and 
 will return a new array with all elements starting with "A" or "a" replaced with "###".
Examples:
 noA(["javascript", "hello", "123", "xyz"]) 	->  ["javascript", "hello", "123", "xyz"]
 noA(["apple", "123", "ABC", "javascript"]) 	->  ["###", "123", "###", "javascript"]
 noA(["apple", "abc", "ABC", "Alex", "A"]) 	    -> ["###", "###", "###", "###", "###"]
*/
// console.log('--- Task 6 ---'); 
// const noA = arr => arr.map(element =>  element[0].toLowerCase() === 'a' ? '###' : element);

// console.log('noA(["javascript", "hello", "123", "xyz"]) -> ', noA(["javascript", "hello", "123", "xyz"])); 
// console.log('noA(["apple", "123", "ABC", "javascript"]) -> ', noA(["apple", "123", "ABC", "javascript"])); 
// console.log('noA(["apple", "abc", "ABC", "Alex", "A"])  -> ', noA(["apple", "abc", "ABC", "Alex", "A"])); 


/* Task 7
Requirement:
 Write a function named no3and5() which takes an array of integer numbers as argument and 
 will return a new array with elements replaced by conditions below.
 If element can be divided by 5, replace it with 99​
 If element can be divided by 3, replace it with 100​
 If element can be divided by both 3 and 5, replace it with 101
Examples:
 no3and5([7, 4, 11, 23, 17])        -> [7, 4, 11, 23, 17]
 no3and5([3, 4, 5, 6])              -> [100, 4, 99, 100]
 no3and5([10, 11, 12, 13, 14, 15]) 	-> [99, 11, 100, 13, 14, 101]

*/
// console.log('--- Task 7 ---'); 
// const no3and5 = arr => arr.map(element => element % 3 === 0 && element % 5 === 0 ? 101 : element % 5 === 0 ? 99 : element % 3 === 0 ? 100 : element);

// console.log('no3and5([7, 4, 11, 23, 17])         -> ', no3and5([7, 4, 11, 23, 17])); 
// console.log('no3and5([3, 4, 5, 6])               -> ', no3and5([3, 4, 5, 6])); 
// console.log('no3and5([10, 11, 12, 13, 14, 15]))  -> ', no3and5([10, 11, 12, 13, 14, 15])); 


/* Task 8
Requirement:
 Write a function named countPrimes() which takes an array of integer numbers 
 as argument and will return the number of the prime numbers in the given array.
 NOTE: Prime number is a number that can be divided only by 1 and itself​.
 NOTE: Negative numbers cannot be prime​.
 Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37 etc.​
NOTE: Smallest prime number is 2.
Examples:
 countPrimes([-10, -3, 0, 1])      -> 0
 countPrimes([7, 4, 11, 23, 17])   -> 4
 countPrimes([41, 53, 19, 47, 67]) -> 5
*/
console.log('--- Task 8 ---'); 
const isPrime = num => {
    if (num < 2) return false
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; 
    }
    return true;
};
const countPrimes = arr => arr.filter(element => isPrime(element)).length;

console.log('countPrimes([-10, -3, 0, 1])      -> ', countPrimes([-10, -3, 0, 1]) ); 
console.log('countPrimes([7, 4, 11, 23, 17])   -> ', countPrimes([7, 4, 11, 23, 17]) ); 
console.log('countPrimes([41, 53, 19, 47, 67]) -> ', countPrimes([41, 53, 19, 47, 67])); 

