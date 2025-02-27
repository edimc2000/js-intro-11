/* TASK 1
Requirement:
Write a program that outputs all the numbers that are divisible by 7 starting from 1 to 100 (both inclusive).
Expected Output: 
7 14 21  ... 91 98
*/
/*
console.log ('--- TASK 1 ---'); 
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
console.log ('--- TASK 2 ---'); 
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
console.log ('--- TASK 3 ---'); 
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
console.log ('--- TASK 4 ---'); 
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
console.log ('--- TASK 5 ---'); 
let sum5 = 0; 
for (i = 1; i <= 10; i++){
    sum5 += i; 
}
console.log (sum5);