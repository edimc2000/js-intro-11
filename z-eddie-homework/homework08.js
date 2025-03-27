/* Task 1 
Requirement:
 Write a function named hasLowerCase() which takes a string argument 
 and returns true if there is a lowercase letter and false if it there isn’t. 
Examples:
 hasLowerCase("")            -> false
 hasLowerCase("JAVASCRIPT")  -> false
 hasLowerCase("hello")       -> true
 hasLowerCase("125$")        -> false
 hasLowerCase("   a   ")     -> true
*/
console.log ('--- Task 1 ---')
const hasLowerCase = string => /[a-z]/.test(string);

let arrOfGivens = [ '', 'JAVASCRIPT', 'hello', '125$', '   a   ' ]; 
for (let element of arrOfGivens){
    console.log(`hasLowerCase('${element}')`.padEnd(30,' '), '->', hasLowerCase(element)); 
}


/* Task 2
Requirement:
 Write a function named noZero() which takes an array of numbers as argument 
 and returns the array back with all zeros removed.
Examples:
 noZero([1])           -> [1]
 noZero([1, 1, 10]​)    -> [1, 1, 10]​
 noZero([0, 1, 10])    -> [1, 10]
 noZero([0, 0, 0])     -> []
 noZero([10, 100, 0])  -> [10, 100]
*/
console.log ('\n--- Task 2 ---')
const noZero = arr => arr.filter(e => e > 0); 

arrOfGivens = [ [1], [1, 1, 10], [0, 1, 10], [0, 0, 0], [10, 100, 0] ]; 
for (let element of arrOfGivens){
     console.log(`noZero([ ${element.join(', ')} ])`.padEnd(30,' '), '->', noZero(element)); 
 }
 

/* Task 3
Requirement:
 Write a function named numberAndSquare() which takes an array of numbers as argument
 and returns a multidimensional array with all numbers squared. 
Examples:
 numberAndSquare([1, 2, 3])     -> [[1, 1], [2, 4], [3, 9]]
 numberAndSquare([0, 3, -6])    -> [[0, 0], [3, 9], [-6, 36]]
 numberAndSquare([1, 4])        -> [[1,1], [4, 16]]
 numberAndSquare([0, 0, 0])     -> [[0, 0], [0, 0], [0, 0]]
 numberAndSquare([0, 1, -10])   -> [[0, 0], [1, 1], [-10, 100]]
*/
console.log ('\n--- Task 3 ---')
const numberAndSquare = arr => arr.map (e=> ([e, e**2]))

arrOfGivens = [ [1, 2, 3], [0, 3, -6], [1, 4], [0, 0, 0], [0, 1, -10] ]; 
for (let element of arrOfGivens){
    console.log(`numberAndSquare([ ${element.join(', ')} ])`.padEnd(30,' '), '->', numberAndSquare(element));  
}
 

 
/* Task 4
Requirement:
 Write a function named containsValue() which takes a string array and a string as arguments and 
 returns a boolean value. Search the string variable inside of the array and return true if it exists 
 in the array. If it doesn’t exist, return false. ​
 NOTE: Assume that array size is at least 1.​
 NOTE: The method is case-sensitive.
Examples:
 containsValue(["abc", "foo", "javascript"], "hello")                -> false
 containsValue(["abc", "def", "123"], "Abc")                         -> false
 containsValue(["abc", "def", "123", "Javascript", "Hello"], "123")  -> true

*/
console.log ('\n--- Task 4 ---')

const containsValue = (arr, string) => arr.includes(string);



arrOfGivens = [ [["abc", "foo", "javascript"], "hello"], [["abc", "def", "123"], "Abc"], [["abc", "def", "123", "Javascript", "Hello"], "123"] ]; 
for (let element of arrOfGivens){
    console.log(`containsValue([ ${element[0].join(', ')} ], ${element[1]})`.padEnd(50,' '), '->', containsValue(element[0], element[1])); 
}
 

/* Task 5


*/
console.log ('\n--- Task 5 ---')



/* Task 6


*/
console.log ('\n--- Task 6 ---')