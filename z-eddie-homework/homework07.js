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
const hasUpperCase = (string) => /[A-Z]/.test(string); 

const strings = [ 'javascript', 'John', '$125.0', '' ]; 
for (let element of strings){
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




const strings = [ 'javascript', 'John', '$125.0', '' ]; 
for (let element of strings){
    console.log(`noDigit('${element}')`.padEnd(30,' '), '->' , noDigit(element)); 
}
console.log ('\n--- Task 3 ---');