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


/* TASK 16 
*/
console.log ('\n--- TASK 16 ---'); 




/* TASK 17 
*/
console.log ('\n--- TASK 17 ---'); 




/* TASK 18 
*/
console.log ('\n--- TASK 18 ---'); 




/* TASK 19 
*/
console.log ('\n--- TASK 19 ---'); 




/* TASK 20 
*/
console.log ('\n--- TASK 20 ---'); 


