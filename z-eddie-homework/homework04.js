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
// console.log ('\n--- TASK 8 ---'); 
// const countries = ['Germany', 'Argentina', 'Ukraine', 'Romania'];

// console.log (countries); 
// console.log ([...countries].sort());




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
console.log ('\n--- TASK 10 ---'); 
const catNames = ['Garfield', 'Tom', 'Sylvester', 'Azrael']
console.log (catNames.sort());
console.log( catNames.includes('Garfield') && catNames.includes('Felix') ? true : false); 



/* TASK 11 
*/
console.log ('\n--- TASK 11 ---'); 



/* TASK 12 
*/
console.log ('\n--- TASK 12 ---'); 



/* TASK 13 
*/
console.log ('\n--- TASK 13 ---'); 



/* TASK 14 
*/
console.log ('\n--- TASK 14 ---'); 




/* TASK 15 
*/
console.log ('\n--- TASK 15 ---'); 




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


