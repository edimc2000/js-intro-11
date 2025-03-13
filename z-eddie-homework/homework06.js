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
console.log('--- Task  ---'); 
const hasVowel = string => /[aeiou]/i.test(string);

console.log('hasVowel("")            -> ', hasVowel("")); 
console.log('hasVowel("Javascript")  -> ', hasVowel("Javascript")); 
console.log('hasVowel("Tech Global") -> ', hasVowel("Tech Global")); 
console.log('hasVowel("1234")        -> ', hasVowel("1234")); 
console.log('hasVowel("ABC")         -> ', hasVowel("ABC")); 