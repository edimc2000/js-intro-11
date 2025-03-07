/* TASK 1 - array methods 
Requirement:
 Write a function named countPos() which takes an array of numbers as an argument 
 and returns how many elements are positive​ when invoked. 
Examples:
 countPos([-45, 0, 0, 34, 5, 67])        -> 3
 countPos([-23, -4, 0, 2, 5, 90, 123]) 	-> 4
 countPos([0, -1, -2, -3]) 		        -> 0

*/
/*
console.log ('\n--- TASK 1 ---'); 
const countPos = (arr) => arr.reduce( (acc, curr) => curr > 0 ? acc + 1 : acc, 0);

console.log('countPos([-45, 0, 0, 34, 5, 67])       -> ', countPos([-45, 0, 0, 34, 5, 67]));
console.log('countPos([-23, -4, 0, 2, 5, 90, 123])  -> ', countPos([-23, -4, 0, 2, 5, 90, 123]) );
console.log('countPos([0, -1, -2, -3])              -> ', countPos([0, -1, -2, -3]));
*/
/* TASK 2  - array methods 
Requirement:
 Write a function named countA() which takes a string argument and returns how many 'A' 
 or 'a' there are in the given string when invoked.
NOTE: 
 Ignore case sensitivity. 
Examples:
 countA("TechGlobal is a QA bootcamp") 	    -> 4
 countA("QA stands for Quality Assurance") 	-> 5
 countA("Cypress") 			                -> 0
*/
/*
console.log ('\n--- TASK 2 ---'); 
const countA = (string) => string.split('').reduce((acc, curr) => curr.toLowerCase() === 'a' ? acc + 1 : acc, 0);

console.log('countA("TechGlobal is a QA bootcamp")     -> ', countA("TechGlobal is a QA bootcamp")); 
console.log('countA("QA stands for Quality Assurance") -> ', countA("QA stands for Quality Assurance")); 
console.log('countA("Cypress")                         -> ', countA("Cypress")); 
*/


/* TASK 3
Requirement: array - methods
Write a function named as countVowels() which takes a string word as an argument and 
returns the count of the vowel letters when invoked.

NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i
Examples:
countVowels("Hello")             -> 2
countVowels("Hello World") 		 -> 3
countVowels("JavaScript is fun") -> 5
countVowels("")                  -> 0
*/
/*
console.log ('\n--- TASK 3 ---'); 
const countVowels = (string) => string.split('').reduce ((acc, curr) => 'aeiou'.includes(curr.toLowerCase()) ? acc+1 : acc,0)

console.log('countVowels("Hello")             ->', countVowels("Hello")  );
console.log('countVowels("Hello World")       ->', countVowels("Hello World") );
console.log('countVowels("JavaScript is fun") ->', countVowels("JavaScript is fun"));
console.log('countVowels("")                  ->', countVowels(""));
*/

/* TASK 4 array method - reduce 
Requirement: 
Write a function named as countConsonants() which takes a string word as an argument 
and returns the count of the consonant letters when invoked.
NOTE: A letter that is not vowel is considered as a consonant letter.
Examples:
countConsonants("Hello") 		       -> 3
countConsonants("Hello World") 		   -> 8 ??  it should be 7 if it's just the consonants 
countConsonants("JavaScript is fun")   -> 12 ??  it should be 10, not counting the space 
countConsonants("")                    -> 0
*/
/*
console.log ('\n--- TASK 4 ---'); 
const countConsonants = (string) => string.split('').reduce ((acc, curr) => 'qwrtypsdfghjklzxcvbnm'.includes(curr.toLowerCase()) ? acc+1 : acc,0)

console.log('countConsonants("Hello")             ->', countConsonants("Hello"));
console.log('countConsonants("Hello World")       ->', countConsonants("Hello World"));
console.log('countConsonants("JavaScript is fun") ->', countConsonants("JavaScript is fun"));
console.log('countConsonants("")                  ->', countConsonants(""));
*/

/* TASK 5 - string method
Requirement: 
Write a function named countWords() which takes a string argument and returns 
the total count of words in the given string when invoked.

NOTE: Be careful about the extra whitespaces before and after the string.
Examples:
countWords("     Javascript is fun       ")             -> 3
countWords("Cypress is an UI automation tool.    ")     -> 6 
countWords("1 2 3 4")                                   -> 4

*/
/*
console.log ('\n--- TASK 5 ---'); 
const countWords = (string) => string.trim().split(' ').length; 

console.log('countWords("     Javascript is fun       ")             ->', countWords("     Javascript is fun       "));
console.log('countWords("Cypress is an UI automation tool.    ")     ->', countWords("Cypress is an UI automation tool.    "));
console.log('countWords("1 2 3 4")                                   ->', countWords("1 2 3 4"));
*/

/* TASK 6
Requirement:
Write a function named as factorial() which takes a number as an argument and returns the factorial of the number when invoked.

NOTE: Mathematically, the factorial of a non-negative integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1

Assume you will not be given a negative number.
Examples:
factorial(5) 		-> 120
factorial(4)		-> 24
factorial(0)		-> 1
factorial(1)		-> 1

*/
/*
console.log ('\n--- TASK 6 ---'); 
const factorial = (num) => {
    let arr = [];
    for (let i = num; i >= 1; i--) { arr.push(i) }
    return arr.reduce((acc, curr) => acc * curr, 1); 
}

console.log('factorial(5) ->', factorial(5));
console.log('factorial(4) ->', factorial(4));
console.log('factorial(0) ->', factorial(0));
console.log('factorial(1) ->', factorial(1));
*/

/* TASK 7 - array method reverse, spread, join
Requirement: 
Write a function named as isPalindrome() which takes a string word as an argument and 
returns true if the word is palindrome or returns false otherwise when invoked.

NOTE: Palindrome: It is a word that is read the same backward as forward
Examples: kayak, civic, madam

NOTE: your function should ignore case sensitivity

Examples:
isPalindrome("Hello")       -> false
isPalindrome("Kayak")       -> true 
isPalindrome("civic")       -> true
isPalindrome("abba")        -> true
isPalindrome("ab  a")       -> false
isPalindrome("123454321")   -> true
isPalindrome("A")           -> true
isPalindrome("")            -> true

*/
/*
console.log ('\n--- TASK 7 ---'); 

const isPalindrome = (string) => {
    let string1 = string.toLowerCase().split('').join(''); 
    let string2 = [... string1].reverse().join('');
    return string1 === string2 
}

console.log('isPalindrome("Hello")       -> ', isPalindrome("Hello") );
console.log('isPalindrome("Kayak")       -> ', isPalindrome("Kayak") );
console.log('isPalindrome("civic")       -> ', isPalindrome("civic") );
console.log('isPalindrome("abba")        -> ', isPalindrome("abba") );
console.log('isPalindrome("ab  a")       -> ', isPalindrome("ab  a") );
console.log('isPalindrome("123454321")   -> ', isPalindrome("123454321") );
console.log('isPalindrome("A")           -> ', isPalindrome("A") );
console.log('isPalindrome("")            -> ', isPalindrome("") );
*/
/* TASK 8 array reduce method 
Requirement: 
Write a function named as countMultipleWords() which takes an array as an argument and 
returns the count of the elements that has multiple words when invoked.

NOTE: Be careful about the extra whitespaces before and after the array element.
Examples:
countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ])        -> 1
countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ])        -> 0
countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]) 	-> 4
countMultipleWords([ ])                                                 -> 0


*/
/*
console.log ('\n--- TASK 8 ---'); 
const countMultipleWords = (arr) => arr.reduce ((acc, curr) => curr.trim().split(' ').length > 1 ? acc + 1 : acc , 0);

console.log('countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ])       -> ', countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ]));
console.log('countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ])       -> ', countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ]));
console.log('countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]) -> ', countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]));
console.log('countMultipleWords([ ]))                                               -> ', countMultipleWords([ ]));
*/
/* TASK 9
Requirement: 
Write a function named as count3OrLess() which takes a string word as an argument and 
returns the count of the words that has 3 characters or less when invoked.

Examples:
count3OrLess("Hello")               -> 0
count3OrLess("Hi John")             -> 1
count3OrLess("JavaScript is fun")   -> 2
count3OrLess("My name is John Doe") -> 3
count3OrLess("")                    -> 0

*/
/*
console.log ('\n--- TASK 9 ---'); 
const count3OrLess = (string) => string.split(' ').reduce((acc,curr) => curr.length < 4 && curr.length !== 0 ? acc + 1 : acc, 0);

console.log('count3OrLess("Hello")                -> ', count3OrLess("Hello") );
console.log('count3OrLess("Hi John")              -> ', count3OrLess("Hi John") );
console.log('count3OrLess("JavaScript is fun")    -> ', count3OrLess("JavaScript is fun") );
console.log('count3OrLess("My name is John Doe")  -> ', count3OrLess("My name is John Doe") );
console.log('count3OrLess("")                     -> ', count3OrLess("") );
*/

/* TASK 10
Requirement:
Write a function named as isPrime() which takes a number as an argument and 
returns true if the number is prime or returns false otherwise when invoked.

NOTE: Mathematically, Prime number is a number that can be divided only by itself and 1. 
It cannot be divided by any other number. The smallest prime number is 2 and 2 is the only even prime number.
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31…
NOTE: The smallest prime number is 2 and there is no negative prime numbers.

Examples:
isPrime(5)   -> true
isPrime(2)   -> true
isPrime(29)  -> true
isPrime(-5)  -> false
isPrime(0)   -> false
isPrime(1)   -> false

*/
/*
console.log ('\n--- TASK 10 ---'); 
const isPrime = (num) => {
    if(num > 1) {
        for (i = 2 ; i <= num; i++  ){    
            return num % i === 0 && num !== i ? false : true;
        }
    } else {
        return false;
    }
}

console.log('isPrime(5)   -> ', isPrime(5) );
console.log('isPrime(2)   -> ', isPrime(2) );
console.log('isPrime(29)  -> ', isPrime(29) );
console.log('isPrime(-5)  -> ', isPrime(-5) );
console.log('isPrime(0)   -> ', isPrime(0) );
console.log('isPrime(1)   -> ', isPrime(1) );
*/

/* TASK 11
Requirement:
Write a function named add() which takes two array of numbers as argument 
and returns a new array with sum of given arrays elements.

NOTE: Be careful about the array sizes as they could be different.
Examples:
add([3, 0, 0, 7, 5, 10], [6, 3, 2]​)                   -> [9, 3, 2, 7, 5, 10]
add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])  -> [16, 11, 9,  3, 2, 7, 5, 10, 34]​
add([-5, 6, -3, 11], [5, -6, 3, -11])                 -> [0, 0, 0, 0]

*/
/*
console.log ('\n--- TASK 11 ---'); 

const add = (arr1, arr2) => {
    let arrRef1, arrRef2; 
    
    if (arr1.length > arr2.length) {
        arrRef1 = arr1; arrRef2 =arr2;
    }else {
        arrRef1 = arr2; arrRef2 = arr1;
    }

    return arrRef1.map((element, index) => {
        if (arrRef2[index] === undefined) {arrRef2[index] = 0}
        return element + arrRef2[index];
    })
}

console.log ('add([3, 0, 0, 7, 5, 10], [6, 3, 2])                  -> ', `[ ${add([3, 0, 0, 7, 5, 10], [6, 3, 2]).join(', ')} ]`); // formatted to prevent array from wrapping to next line
console.log ('add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]) -> ', `[ ${add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]).join(', ')} ]`);
console.log ('add([-5, 6, -3, 11], [5, -6, 3, -11])                -> ', `[ ${add([-5, 6, -3, 11], [5, -6, 3, -11]).join(', ')} ]` );
*/

 
/* TASK 12
Requirement: 
Write a function named as removeExtraSpaces() which takes a string word as an argument and returns the string back with all extra spaces removed when invoked.

Examples:
removeExtraSpaces("Hello")                              -> "Hello" 
removeExtraSpaces("      Hello    World     ") 	        -> "Hello World" 
removeExtraSpaces("     JavaScript is          fun") 	-> "JavaScript is fun”
removeExtraSpaces("") 			                        -> "" 

*/
/*
console.log ('\n--- TASK 12 ---'); 

const removeExtraSpaces = (string) => string.trim().split(' ').filter (element=> element.length > 0).join(' ')

console.log('removeExtraSpaces("Hello")                            -> ', removeExtraSpaces("Hello") );
console.log('removeExtraSpaces(""      Hello    World     "")      -> ', removeExtraSpaces("Hello    World") );
console.log('removeExtraSpaces(("     JavaScript is          fun") -> ', removeExtraSpaces("     JavaScript is          fun") );
console.log('removeExtraSpaces("")                                 -> ', removeExtraSpaces("") );
*/


/* TASK 13
Requirement: 
Write a function named findClosestTo10() which takes an array of numbers as 
argument and returns the closest element to 10 from the given array.

NOTE: Assume that length of array is always more than zero.
NOTE: Ignore the 10 itself.
NOTE: If there are more than one numbers are close equally, return the smaller number.
Examples:
findClosestTo10([10, -13, 5, 70, 15, 57]​)  -> 5
findClosestTo10([10, -13, 8, 12, 15, -20]) -> 8
findClosestTo10([0, -1, -2])               -> 0

*/
console.log ('\n--- TASK 13 ---'); 
const findClosestTo10 = (arr) => {
    let distanceFrom10 = arr.map(element => Math.abs(10 - element));
    let distanceFrom10Filtered = [...distanceFrom10].filter( element => element > 0).sort((a,b) => a-b);
    let firstIndex = distanceFrom10.indexOf(distanceFrom10Filtered[0])
    let lastIndex =  distanceFrom10.lastIndexOf(distanceFrom10Filtered[0])

    return arr[firstIndex] < arr[lastIndex] ? arr[firstIndex] :arr[lastIndex];
}

console.log('findClosestTo10([10, -13, 5, 70, 15, 57])  -> ', findClosestTo10([10, -13, 5, 70, 15, 57]) ); 
console.log('findClosestTo10([10, -13, 8, 12, 15, -20]) -> ', findClosestTo10([10, -13, 8, 12, 15, -20]) ); 
console.log('findClosestTo10([0, -1, -2])               -> ', findClosestTo10([0, -1, -2])   ); 


/* TASK 14
Requirement: 
Write a function named as isEmailValid() which takes a string email as an argument and returns true if the email is valid or returns false otherwise when invoked.

NOTE: A VALID EMAIL:
should NOT have any space.
should not have more than one “@” character.
should be in the given format <2+chars>@<2+chars>.<2+chars> meaning
There should be at least characters before @ character.
There should be at least 2 characters between @ and . Characters.
There should be at least 2 characters after the . character.

Examples:
isEmailValid("") 			-> false
isEmailValid("@gmail.com") 		-> false
isEmailValid("johndoe@yahoo") 		-> false
isEmailValid("johndoe@.com") 		-> false
isEmailValid("a@outlook.com") 		-> false
isEmailValid("johndoe@a.com") 		-> false
isEmailValid("johndoe@@gmail.com") 	-> false
isEmailValid("johndoe@gmail.com") 		-> true

*/
console.log ('\n--- TASK 14 ---'); 

/* TASK 15
Requirement: 
Write a function named as isPasswordValid() which takes a string email as an argument and returns true if the password is valid or returns false otherwise when invoked.

NOTE: A VALID PASSWORD:
should have length of 8 to 16 (both inclusive).
should have at least 1 digit, 1 uppercase, 1 lowercase and 1 special char.
should NOT have any space.

Examples:
isPasswordValid("") 			-> false
isPasswordValid("abcd") 			-> false
isPasswordValid("abcd1234") 		-> false
isPasswordValid("Abcd1234") 		-> false
isPasswordValid("Chicago12345US!#$%") 	-> false
isPasswordValid("Abcd1234$") 		-> true
isPasswordValid("Chicago123$") 		-> true
isPasswordValid("Test1234#") 		-> true

*/
console.log ('\n--- TASK 15 ---'); 
