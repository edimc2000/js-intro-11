/* TASK 1
Requirement:
Write a program that outputs all the numbers that are divisible by 7 starting from 1 to 100 (both inclusive).
Expected Output: 
7 14 21  ... 91 98
*/
/*
console.log ('\n--- TASK 1 ---'); 
for (i = 1; i <= 100; i++){
    if (i % 7 === 0) console.log (i);
}
*/

/* TASK 2
Requirement:
Write a program that outputs all the numbers that are divisible by both 2 and 3 starting from 1 to 50 (both inclusive).

Expected Output:
6 12 18 ... 36 42 48
*/
/*
console.log ('\n--- TASK 2 ---'); 
for (i = 1; i <= 50; i++){
    if (i % 2 === 0 && i % 3 === 0 ) console.log (i);
}
*/

/* TASK 3
Requirement:
Write a program that outputs all the numbers that are divisible by 5 starting from 100 to 50 (both inclusive).

Expected Output:
100 95 90 85 ... 60 55 50
*/

/*
console.log ('\n--- TASK 3 ---'); 
for (i = 100; i >= 50; i--){
    if (i % 5 === 0) console.log (i);
}
*/

/* TASK 4
Requirement:
Write a program that outputs the squares of all numbers starting from 0 to 7 (both inclusive).
NOTE: Use loop!!!

Expected Output:
The square of 0 is =  0
The square of 1 is =  1
The square of 2 is =  4
The square of 3 is =  9
The square of 4 is =  16
The square of 5 is =  25
The square of 6 is =  36
The square of 7 is =  49

*/
/*
console.log ('\n--- TASK 4 ---'); 
for (i = 0; i <= 7; i++){
    console.log (`The square of ${i} is = ${i**2}`);
}
*/

/* TASK 5
Requirement:
Write a program that finds sum of the numbers starting from 1 to 10 (both inclusive).
Calculation => 1+2+3+4+5+6+7+8+9+10

NOTE: Use loop!!!

Expected Output:
55
*/
/*
console.log ('\n--- TASK 5 ---'); 
let sum5 = 0; 
for (i = 1; i <= 10; i++){
    sum5 += i; 
}
console.log (sum5);
*/

/* TASK 6
Requirement:
Write a program generates a random number between 1 and 10 (both inclusive).
And find the factorial of the number.

Mathematically, the factorial of a non-negative integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1

For example:
5! = 5 × 4 × 3 × 2 × 1 = 120
4! = 4 × 3 × 2 × 1 = 24
0! (by convention) is defined as 1.

*/
// console.log ('\n--- TASK 6 ---'); 
// let randomNum6 = Math.floor (Math.random() * ( 10 -1 + 1 ) + 1)
// let factorial = 1;  
// for (i = randomNum6; i >= 1; i--){
//     factorial *= i; 
// }
// console.log (`${randomNum6}! = ${factorial}`);


/* TASK 7 
Requirement:
Write a program generates a random number between 1 and 100 (both inclusive).
Keep generating a new number till you get a number that is divisible by 5.

The program should also count how many attempts it takes to generate such a number.

Eventually, print the random number divisible by 5 with the number of attempts as below.

Expected Output:The random number is {randomNumber} and it took {attempts} attempt/s to generate it.

*/
/*
console.log ('\n--- TASK 7 ---'); 
const randomNum7 = () => Math.floor (Math.random() * ( 100 -1 + 1 ) + 1); 
let counter7 = 0;  
let r7; 
let check = true;
 
while (check) {
    r7 = randomNum7(); 
    if ( r7 % 5 === 0) { check = false };
    counter7 ++ ;
}

console.log(`\nThe random number is ${r7} and it took ${counter7} ${counter7 > 1?'attempts':'attempt'} to generate it.`)
*/

/* TASK 8 
Requirement:
-Create an array that stores countries below.
Germany, Argentina, Ukraine, Romania

THEN:
-Output the entire array
-Ouput the entire array sorted lexicographically

Expected Result:
['Germany', 'Argentina', 'Ukraine', 'Romania' ]
[ 'Argentina', 'Germany', 'Romania', 'Ukraine' ]

*/
/*
console.log ('\n--- TASK 8 ---'); 
const countries = ['Germany', 'Argentina', 'Ukraine', 'Romania'];

console.log (countries); 
console.log ([...countries].sort());
*/



/* TASK 9 
Requirement:
-Create a String array that stores cartoon dogs below
Scooby Doo, Snoopy, Blue, Pluto, Dino, Sparky 

THEN:
-Output the entire array
-Then, check if the array has Pluto element
	if it has Pluto, then output true
	if it does not have Pluto, output false

Expected Result:
[ 'Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky' ]
true

*/
/*
console.log ('\n--- TASK 9 ---'); 
const dogNames = ['Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky']
console.log (dogNames);
console.log(dogNames.includes('Pluto') ? true : false); 
*/

/* TASK 10 
Requirement:
-Create an array that stores cartoon cats below.
Garfield, Tom, Sylvester, Azrael

THEN:
-Output the entire array sorted lexicographically
-Then, check if the array has both Garfield and Felix
	if it has both, then output true
	if it does not have both, output false

Expected Result:
[ 'Azrael', 'Garfield', 'Sylvester', 'Tom' ]
false

*/
/*
console.log ('\n--- TASK 10 ---'); 
const catNames = ['Garfield', 'Tom', 'Sylvester', 'Azrael']
console.log (catNames.sort());
console.log( catNames.includes('Garfield') && catNames.includes('Felix') ? true : false); 
*/


/* TASK 11 
Requirement:
-Create an array that stores numbers below
10.5, 20.75, 70, 80, 15.75

THEN:
-Output the entire array
-Ouput each element

Expected Result:
[ 10.5, 20.75, 70, 80, 15.75 ]
10.5
20.75
70
80
15.75

*/
/*
console.log ('\n--- TASK 11 ---'); 
const arr11= [10.5, 20.75, 70, 80, 15.75]
console.log (arr11);

for (i = 0; i < arr11.length; i++) {
    console.log(`${arr11[i]}`)
}
*/


/* TASK 12 
Requirement:
-Create an array that stores objects below.
Pen, notebook, Book, paper, bag, pencil, Ruler

THEN:
-Output the entire array.
-Output how many elements starts with 'B' or 'P', ignoring cases.
-Output how many elements has 'book' or 'pen' partial strings, ignoring cases.

Expected Result:
['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler' ]
Elements starting with 'B' or 'P' = 5
Elements having 'book' or 'pen' = 4 

*/
/*
console.log ('\n--- TASK 12 ---'); 
const arr12 = ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler'];
let bpCounter = 0; 
let bookPenCounter = 0; 

for (i = 0; i < arr12.length; i++){
    arr12[i][0].toUpperCase() === 'B' || arr12[i][0].toUpperCase() === 'P' ? bpCounter++ : ''; 
    arr12[i].toLocaleLowerCase().includes('book') || arr12[i].toLocaleLowerCase().includes('pen') ? bookPenCounter++ : '';
}

console.log (arr12);
console.log(`Elemets starting with 'B' or 'P' = ${bpCounter}`); 
console.log(`Elemets starting with 'book' or 'pen' = ${bookPenCounter}`); 
*/


/* TASK 13 
Requirement:
-Create an array that stores numbers below.
3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78

THEN:
-Output the entire array
-Output how many elements are more than 10
-Output how many elements are less than 10
-Output how many elements are 10

Expected Result:
[ 3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78 ]
Elements that are more than 10 = 5
Elements that are less than 10 = 4
Elements that are 10 = 2

*/
/*
console.log ('\n--- TASK 13 ---'); 
const arr13 = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78]
let more10 = 0, less10 = 0, val10 = 0, i = 0; 

while (i < arr13.length){
    arr13[i] > 10 ? more10++ : arr13[i] < 10 ? less10++ : val10++ ; 
    i++; 
}

console.log(arr13); 
console.log(`Elements that are more than 10 = ${more10}`); 
console.log(`Elements that are less than 10 = ${less10}`); 
console.log(`Elements that are 10 = ${val10}`); 

*/

/* TASK 14 
Requirement:
-Create 2 arrays that stores numbers below.
First array-> 		[ 5, 8, 13, 1, 2 ]
Second array -> 	[ 9, 3, 67, 1, 0 ]

THEN:
-Output both arrays
–Then, create a new array that will take the greatest value of same index from first 2 arrays and output the third array as well.

Expected Result:
1st array is =  [ 5, 8, 13, 1, 2 ]
2nd array is = [ 9, 3, 67, 1, 0 ]
3rd array is =  [ 9, 8, 67, 1, 2 ]


*/
/*
console.log ('\n--- TASK 14 ---'); 
const arr141 = [ 5, 8, 13, 1, 2 ];
const arr142 = [ 9, 3, 67, 1, 0 ]; 
let arr143 = []; 

for (i = 0; i < arr141.length; i++) {
    arr143.push( Math.max(arr141[i], arr142[i]) ) 
}

console.log (`1st array is = ${arr141}`); 
console.log (`2nd array is = ${arr142}`); 
console.log (`3rd array is = ${arr143}`); 
*/

/* TASK 15 
Requirement:
Write a function named as firstDuplicate() which takes an array argument and 
returns the first duplicated number in the array when invoked.
NOTE: Make your code dynamic that works for any array and return -1 if there are no duplicates in the array. 
For two elements to be considered as duplicated, value and data types of the elements must be same.

Examples:
firstDuplicate([ 3, 7, 10, 0, 3, 10 ])		-> 3
firstDuplicate([ 5, 7, 7, 0, 5, 10 ])		-> 5
firstDuplicate([ 5, '5', 3, 7, 4 ])		-> -1
firstDuplicate([ 123, 'abc', '123', 3, 'abc' ])	-> 'abc'
firstDuplicate([ 1, 2, 3])			-> -1
firstDuplicate([ 'foo', 'abc', '123', 'bar’ ]) 	-> -1
*/
/*
console.log ('\n--- TASK 15 ---'); 
let firstDupe = ''; 
const firstDuplicate = arr => {
    for(i = 0; i < arr.length; i++) {
        if ( arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i]) ) {
            firstDupe =  -1;
        } else {
            firstDupe =  arr[i]; 
            break;  
        } 
    } 
    return firstDupe;  
}

console.log (`firstDuplicate ( [ 3, 7, 10, 0, 3, 10 ] )             ->`, firstDuplicate ( [ 3, 7, 10, 0, 3, 10 ] ) )
console.log (`firstDuplicate ( [ 5, 7, 7, 0, 5, 10 ] ) )            ->`, firstDuplicate ( [ 5, 7, 7, 0, 5, 10 ] ) )
console.log (`firstDuplicate ( [ 5, '5', 3, 7, 4 ] ) )              ->`, firstDuplicate ( [ 5, '5', 3, 7, 4 ] ) )
console.log (`firstDuplicate ( [ 123, 'abc', '123', 3, 'abc' ] ) )) ->`, firstDuplicate ( [ 123, 'abc', '123', 3, 'abc' ] ) )
console.log (`firstDuplicate ( [ 1, 2, 3  ] ) )                     ->`, firstDuplicate ( [ 1, 2, 3  ] ) )
console.log (`firstDuplicate( [ 'foo', 'abc', '123', 'bar'   ] ) )  ->`, firstDuplicate ( [ 'foo', 'abc', '123', 'bar'   ] ) )
*/

/* TASK 16 
Requirement:
Write a function named as getDuplicates() which takes an array argument 
and returns all the duplicated elements in the array when invoked.

NOTE: Make your code dynamic that works for any array and return empty array 
if there are no duplicates in the array. For two elements to be considered as duplicated, 
value and data types of the elements must be same.

Examples:
getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ])		-> [ 0, -7 ]
getDuplicates([ 1, 2, 5, 0, 7 ])			-> [ ]
getDuplicates(['A', 'foo', '12’ , 12, 'bar', 'a', 'a', 'foo' ])	-> [ 'foo', 'a’ ]
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ])		-> [ ]

*/
/*
console.log ('\n--- TASK 16 ---'); 
let container16;

const getDuplicates = arr => {
    arr.sort();
    container16 = [];
    for (index = 0; index < arr.length; index++ ) {
        if (arr[index-1] === arr[index]) {
            container16.includes(arr[index]) ? '' : container16.push(arr[index]); 
        }
    }
    return container16
}

console.log(`getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0])               ->`, getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0]));
console.log(`getDuplicates([ 1, 2, 5, 0, 7 ])                                   ->`,  getDuplicates([ 1, 2, 5, 0, 7 ]) );
console.log(`getDuplicates(['A', 'foo', '12’ , 12, 'bar', 'a', 'a', 'foo' ])    ->`, getDuplicates(['A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo' ]) ); 
console.log(`getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ])                    ->`, getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]) ); 
*/

/* TASK 17 
Requirement:
Write a function named as reverseStringWords() 
which takes a string as an argument and 
returns string back with each word separately reversed when invoked.

NOTE: Make your code dynamic that works for any string. 
Make sure you consider extra spaces before and after words in the given string.

Examples:
reverseStringWords("Hello World") 		-> "olleH dlroW"
reverseStringWords("I like JavaScript") 	-> "I ekil tpircSavaJ"
reverseStringWords("Hello") 		-> "olleH"
reverseStringWords("") 			-> ""
reverseStringWords("    ") 		-> ""


*/
/*
console.log ('\n--- TASK 17 ---'); 
let container17, container172; 

const reverseStringWords = string => {
    container172 = []
    let arr17 = string.split(' ')
    for (i = 0; i <arr17.length; i++) {
        container17 = []
        for (j = arr17[i].length-1; j >=0 ; j--) {
            container17.push(arr17[i][j])
        }
        container172.push(container17.join(''))
    }
    return container172.join(' ')
}; 

console.log ('reverseStringWords("Hello World")        ->', reverseStringWords("Hello World")); 
console.log ('reverseStringWords("I like JavaScript")  ->', reverseStringWords("I like JavaScript") ); 
console.log ('reverseStringWords("Hello")              ->', reverseStringWords("Hello")  ); 
console.log ('reverseStringWords("")                   ->', reverseStringWords("") 	); 
console.log ('reverseStringWords("    ")               ->', reverseStringWords("    ")); 
*/


/* TASK 18 
Requirement:
Write a function named as getEvens() which takes 2 number arguments and 
returns all the even numbers as an array stored from smallest even number 
to greatest even number when invoked.
NOTE: Make your code dynamic that works for any numbers and return empty array
if there are no even numbers in the range of given 2 numbers. 
Assume you will not be given negative numbers.

Examples:
getEvens(2, 7)	-> [ 2, 4, 6 ]
getEvens(17, 5)	-> [ 6, 8, 10, 12, 14, 16 ]
getEvens(4, 4)	-> [ 4 ]
getEvens(3, 3)	-> [ ]

*/
/*
console.log ('\n--- TASK 18 ---'); 
let store18; 

const getEvens = (num181, num182) => {
    store18 = []; 
    for ( i = Math.min(num181, num182); i <= Math.max(num181, num182); i++ ) {
        if (i % 2 === 0) store18.push(i); 
    }
    return store18; 
}

console.log ('getEvens(2, 7)   -> ', getEvens(2, 7)); 
console.log ('getEvens(17, 5)  -> ', getEvens(17, 5)); 
console.log ('getEvens(4, 4)   -> ', getEvens(4, 4)); 
console.log ('getEvens(3, 3)   -> ', getEvens(3, 3)); 
*/



/* TASK 19 
Write a function named as getMultipleOf5() which takes 2 number arguments and 
returns all the numbers divisible by 5 as an array stored from first found match 
to last found match when invoked.
NOTE: Make your code dynamic that works for any numbers and return empty array 
if there are no numbers divisible by 5 in the range of given 2 numbers. 
Assume you will not be given negative numbers.

Examples:
getMultipleOf5(3, 17)	-> [ 5, 10, 15]
getMultipleOf5(23, 5)	-> [ 20, 15, 10, 5 ]
getMultipleOf5(5, 5)	-> [ 5 ]
getMultipleOf5(2, 4)	-> [ ]

*/
/*
console.log ('\n--- TASK 19 ---'); 
let container19; 
const getMultipleOf5 = (num191, num192) => {
    container19 = []; 
    for (i = Math.min(num191, num192); i <= Math.max(num191, num192); i++) {
        if (i % 5 === 0 ) container19.push(i) ; 
    }
    return container19
}
console.log('getMultipleOf5(3, 17) -> ', getMultipleOf5(3, 17));
console.log('getMultipleOf5(23, 5) -> ', getMultipleOf5(23, 5));
console.log('getMultipleOf5(5, 5)  -> ', getMultipleOf5(5, 5));
console.log('getMultipleOf5(2, 4)  -> ', getMultipleOf5(2, 4) );
*/


/* TASK 20 
Requirement:
Write a function named as fizzBuzz() which takes 2 number arguments and 
returns a string composed with below requirements when invoked.
 - You need to find all the numbers within the range of given 2 numbers (both inclusive) 
   and store them in a string from smallest to greatest number with a ' | ' separator for each number.
 - You will need to convert numbers divisible by 3 to 'Fizz'
 - You will need to convert numbers divisible by 5 to 'Buzz'
 - You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’
The rest will stay the same.
NOTE: Make your code dynamic that works for any numbers.
Assume you will not be given negative numbers.

Examples:
fizzBuzz(13, 18)	-> "13 | 14 | FizzBuzz | 16 | 17 | Fizz" 
fizzBuzz(12, 5)	-> "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz"
fizzBuzz(5, 5)	-> "Buzz"
fizzBuzz(9, 6)	-> "Fizz | 7 | 8 | Fizz"


*/
console.log ('\n--- TASK 20 ---'); 
let container20; 

const fizzBuzz = (num201, num202) => {
    container20 = []; 
    for (i = Math.min(num201, num202); i <= Math.max(num201, num202); i++) {
        i % 3 === 0 && i % 5 === 0 ? container20.push('FizzBuzz') 
        : i % 3 === 0 ? container20.push('Fizz')
        : i % 5 === 0 ? container20.push('Buzz')
        : container20.push(i)
    }
    return container20.join(' | ')
}

console.log ('fizzBuzz(13, 18) -> ', fizzBuzz(13, 18)); 
console.log ('fizzBuzz(12,  5) -> ', fizzBuzz(12,  5)); 
console.log ('fizzBuzz( 5,  5) -> ', fizzBuzz( 5,  5)); 
console.log ('fizzBuzz( 9,  6) -> ', fizzBuzz( 9,  6)); 

