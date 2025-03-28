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
    console.log(`containsValue([ '${element[0].join('\', \'')}' ], '${element[1]}')`.padEnd(70,' '), '->', containsValue(element[0], element[1])); 
}
 

/* Task 5
Requirement:
 Write a function named reverseSentence() which takes a string as argument and returns 
 the words in reverse order.​ If there is no enough words reverse, return "There is not enough words!".
Examples:
 reverseSentence("Hello")               -> "There is not enough words!"
 reverseSentence("Javascript is fun")   -> "Fun is javascript"
 reverseSentence("This is a sentence")  -> "Sentence a is this"


*/
console.log ('\n--- Task 5 ---')
const capFirstLetter = string => string.replace(/[^.]/, string[0].toUpperCase());
const reverseSentence = string => string.trim().split(' ').length < 2 ? 'There is not enough words!' 
 : capFirstLetter(string.trim().toLowerCase().split(' ').reverse().join(' '));

arrOfGivens = [ 'Hello', 'Javascript is fun', 'This is a sentence' ]; 
for (let element of arrOfGivens){
    console.log(`reverseSentence('${element}')`.padEnd(40,' '), '->', reverseSentence(element)); 
}




/* Task 6
Requirement:
 Write a function named removeStringSpecialsDigits() which takes a string as argument 
 and return a string without the special characters or digits.
Examples:
 removeStringSpecialsDigits("123Javascript #%$is fun")  -> "Javascript is fun" 
 removeStringSpecialsDigits("Cypress")                  -> "Cypress"
 removeStringSpecialsDigits("Automation123#$%")         -> "Automation"
*/
console.log ('\n--- Task 6 ---')

const removeStringSpecialsDigit = string => string.trim().split('').filter(e => /[\sa-z]/i.test(e)).join('')

arrOfGivens = [ '123Javascript #%$is fun', 'Cypress', 'Automation123#$%' ]; 
for (let element of arrOfGivens){
    console.log(`removeStringSpecialsDigit('${(element)}')`.padEnd(55,' '), '->', removeStringSpecialsDigit(element)); 
}


/* Task 7
Requirement:
 Write a function named removeArraySpecialsDigits() which takes a string array as argument and 
 return back without the special characters or digits.
Examples:
 removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"])   -> ["Javascript", "is", "fun"]
 removeArraySpecialsDigits(["Cypress", "123$%", "###"])         -> ["Cypress", "", ""]
 removeArraySpecialsDigits(["Automation", "123#$%tool"])        -> ["Automation", "tool"]

*/
console.log ('\n--- Task 7 ---')
const removeArraySpecialsDigits = arr => arr.map(e => e.split('').filter(e=>/[\sa-z]/i.test(e)).join('') )

arrOfGivens = [ ["123Javascript", "#%$is", "fun"], ["Cypress", "123$%", "###"], ["Automation", "123#$%tool"] ]; 
for (let element of arrOfGivens){
    console.log(`removeArraySpecialsDigits([ ${element.join(', ')} ])`.padEnd(60,' '), '->', removeArraySpecialsDigits(element));  
}


/* Task 8
Requirement:
 Write a function named getCommons() which takes two string arrays as arguments and 
 returns all the common words.
Examples:
 getCommons( ["Javascript", "is", "fun"], ["abc", "xyz", "123"] )           -> []
 getCommons( ["Javascript", "is", "fun"], ["Javascript", "C#", "Python"] )  -> ["Javascript"]
 getCommons( ["Javascript", "C#", "C#"], ["Python", "C#", "C++"] )          -> ["C#"]
*/
console.log ('\n--- Task 8 ---')
const getCommons = (arr1, arr2) => [...new Set(arr1.filter(e => arr2.includes(e)))]

arrOfGivens = [ [["Javascript", "is", "fun"], ["abc", "xyz", "123"]], [["Javascript", "is", "fun"], ["Javascript", "C#", "Python"]], [["Javascript", "C#", "C#"], ["Python", "C#", "C++"]] ]; 
for (let element of arrOfGivens){
    console.log(`getCommons([ '${element[0].join('\', \'')}' ], [ '${element[1].join('\', \'')}' ])`.padEnd(75,' '), '->', getCommons(element[0], element[1])); 
}



/* Task 9
Requirement:
 Write a function named noXInVariables() which takes an array as argument and return 
 an array that all the x or X removed from the elements. 
 NOTE: If the element is existing of x or X letters only, then completely remove 
 the element.
Examples:
 noXInVariables(["abc", 123, "#$%"])        -> ["abc", 123, "#$%"]
 noXInVariables(["xyz", 123, "#$%"])        -> ["yz", 123, "#$%"]
 noXInVariables(["x", 123, "#$%"])          -> [123, "#$%"]
 noXInVariables(["xyXyxy", "Xx", "ABC"])    -> ["yyy", "ABC"]

*/
console.log ('\n--- Task 9 ---')
const noXInVariables = arr => {
    let removeX = string => String(string).split('').filter(e => !'x'.includes(e.toLowerCase())).join('');
    return arr.map(e=> removeX(e)).filter(e=> e.length>0);
}

arrOfGivens = [ ["abc", 123, "#$%"], ["xyz", 123, "#$%"], ["x", 123, "#$%"], ["xyXyxy", "Xx", "ABC"]  ]; 
for (let element of arrOfGivens){
    console.log(`noXInVariables([ '${element.join('\', \'')}' ]`.padEnd(45,' '), '->', noXInVariables(element)); 
}