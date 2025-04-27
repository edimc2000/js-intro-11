const reps = 100, pads = 75
/* Task 1 
Requirement:
 Write a function named calculateTotalPrice1() which takes an object of some shopping items with their quantities as key-value 
 pairs and returns the total price of the given items based on  the price list below.
  1 Apple is $2.00​
  1 Orange is 3.29
  1 Mango is $4.99
  1 Pineapple $5.25
Examples:
 calculateTotalPrice1({ apple: 3, mango: 1 })                           -> 10.99
 calculateTotalPrice1({ apple: 2, pineapple: 1, orange: 3 })            -> 19.12
 calculateTotalPrice1({ apple: 0, mango: 0, orange: 0 })                -> 0
 calculateTotalPrice1({ apple: 1, pineapple: 1, orange: 0, mango:1 })   -> 12.24
*/
console.log('\n--- Task 1 ---' + ('-'.repeat(reps)))
const calculateTotalPrice1 = fruitObj => {
    const prices = { apple: 2.00, pineapple: 5.25, orange: 3.29, mango: 4.99 }
    return Object.keys(fruitObj).reduce((acc, e) => acc + prices[e] * fruitObj[e], 0)
}

let arrOfGivens = [
    { apple: 3, mango: 1 },
    { apple: 2, pineapple: 1, orange: 3 },
    { apple: 0, mango: 0, orange: 0 },
    { apple: 1, pineapple: 1, orange: 0, mango: 1 }
]
for (let element of arrOfGivens) {
    console.log(`calculateTotalPrice1( ${JSON.stringify(element)} )`.padEnd(pads, ' '), '-> $', calculateTotalPrice1(element))
}


/* Task 2
Requirement:
 Write a function named calculateTotalPrice2() which takes an object of some shopping items with their quantities as key-value 
 pairs and returns the total price of the given items based on the price list below.
  1 Apple is $2.00​
  1 Orange is 3.29
  1 Mango is $4.99
  1 Pineapple $5.25
 Note: There will be some discounts as below​.
  There will be %50 discount for every second Apple​
  There will be 1 free Mango if customer gets 3. So, fourth one is free.
Examples:
 calculateTotalPrice2({ Apple: 3, Mango: 5 })                          -> 24.96
 calculateTotalPrice2({ Apple: 4, Mango: 8, Orange: 3 })               -> 45.81
 calculateTotalPrice2({ Apple: 0, Pineapple: 0, Orange: 0 })           -> 0
 calculateTotalPrice1({ Apple: 4, Pineapple: 1, Orange: 1, Mango:3 })  -> 29.51
*/
console.log('\n--- Task 2 ---' + ('-'.repeat(reps)))
const calculateTotalPrice2 = fruitObj => {
    const prices = { Apple: 2.00, Pineapple: 5.25, Orange: 3.29, Mango: 4.99 }
    let applesCost = 0
    let mangoesCost = 0

    for (let i = 1; i <= fruitObj['Apple']; i++) {
        i % 2 === 0 ? applesCost += prices['Apple'] * 0.5 : applesCost += prices['Apple']
    }

    for (let i = 1; i <= fruitObj['Mango']; i++) {
        i % 4 === 0 ? mangoesCost += prices['Mango'] * 0 : mangoesCost += prices['Mango']
    }

    let result = mangoesCost + applesCost + (fruitObj['Pineapple'] * prices['Pineapple'] || 0) + (fruitObj['Orange'] * prices['Orange'] || 0)
    return result ? result.toFixed(2) : 0
}

arrOfGivens = [
    { Apple: 3, Mango: 5 },
    { Apple: 4, Mango: 8, Orange: 3 },
    { Apple: 0, Pineapple: 0, Orange: 0 },
    { Apple: 4, Pineapple: 1, Orange: 1, Mango: 3 }
]
for (let element of arrOfGivens) {
    console.log(`calculateTotalPrice2( ${JSON.stringify(element)} )`.padEnd(pads, ' '), '-> $', calculateTotalPrice2(element))
}

/* Task 3 
Requirement:
 Write a function named nthWord() which takes a string and a number arguments and returns the nth word in the string. 
 Note: Function should return empty string if the number argument is greater than the count of the words in the given string.
Examples:
 nthWord("I like programming languages", 2)        -> "like"
 nthWord("QA stands for Quality Assurance", 4)​     -> "Quality"
 nthWord("Hello World", 3)                         -> ""
 nthWord("Javascript", 1)                          -> "Javascript”
 nthWord("", 1)                                    -> ""
*/
console.log('\n--- Task 3 ---' + ('-'.repeat(reps)))
const nthWord = (str, num) => `"${str.trim().split(' ')[num - 1] ?? ""}"`

arrOfGivens = [
    ["I like programming languages", 2],
    ["QA stands for Quality Assurance", 4],
    ["Hello World", 3],
    ["Javascript", 1],
    ["", 1]
]
for (let element of arrOfGivens) {
    console.log(`nthWord( "${element[0]}", ${element[1]} )`.padEnd(pads, ' '), '->', nthWord(element[0], element[1]))
}


/* Task 4 
Requirement:
 Write a function named isArmstrong() which takes a number argument and returns true if given number is armstrong, return false otherwise.​
 Note: An armstrong number is a number that is equal to the sum of its own digits raised to the power of the number of digits. In other 
 words, an n-digit number is an Armstrong number if the sum of its digits, each raised to the nth power, is equal to the number itself.
 Let's take an example to understand it better. Consider the number 153.​
 To determine if 153 is an armstrong number, we need to check if the sum of its digits, each raised to the power of the number of digits,
 equals the original number.​
 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153​
 In this case, the sum of the individual digits raised to the power of 3 (the number of digits in 153) is equal to the original number, 
 which means 153 is an armstrong number.
Examples:
 isArmstrong(153)   -> true
 isArmstrong(123)   -> false
 isArmstrong(1634)  -> true
 isArmstrong(153)   -> true
 isArmstrong(1111)  -> false
*/
console.log('\n--- Task 4 ---' + ('-'.repeat(reps)))
const isArmstrong = num => num.toString().split('').reduce((acc, e, i, arr) => acc + e ** arr.length, 0) === num

arrOfGivens = [153, 123, 1634, 153, 1111]
for (let element of arrOfGivens) {
    console.log(`isArmstrong( ${element} )`.padEnd(pads, ' '), '->', isArmstrong(element))
}


/* Task 5 
Requirement:
 Write a function named reverseNumber() which takes a number argument and returns it back reversed without converting it to a String.
 Note: Do not convert number to string to complete the task.
Examples:
 reverseNumber(371)  -> 173
 reverseNumber(123)  -> 321
 reverseNumber(12)   -> 21
 reverseNumber(0)    -> 0
 reverseNumber(111)  -> 111
*/
console.log('\n--- Task 5---' + ('-'.repeat(reps)))
function reverseNumber(num) {
    let reversed = 0
    while (num > 0) {
        const digit = num % 10
        num = Math.floor(num / 10)
        reversed = reversed * 10 + digit
    }
    return reversed
}

arrOfGivens = [371, 123, 12, 0, 111, 1234]
for (let element of arrOfGivens) {
    console.log(`reverseNumber( ${element} )`.padEnd(pads, ' '), '->', reverseNumber(element))
}


/* Task 6
Requirement:
 Write a function named doubleOrTriple() which takes an array of numbers as argument and a boolean value. 
 It will return the array elements doubled if true or tripled if the boolean value is false.​
Examples:
 doubleOrTriple([1, 5, 10], true)    -> [2, 10, 20]
 doubleOrTriple([3, 7, 2], false)    -> [9, 21, 6]
 doubleOrTriple([-1, -2], true)      -> [-2, -4]
 doubleOrTriple([0], false)          -> [0]
 doubleOrTriple([-1, 0, 1], true)    -> [-2, 0, 2]
*/
console.log('\n--- Task 6---' + ('-'.repeat(reps)))
const doubleOrTriple = (arr, bool) => bool === false ? arr.map(e => e * 3) : arr.map(e => e * 2)

arrOfGivens = [[[1, 5, 10], true], [[3, 7, 2], false], [[-1, -2], true], [[0], false], [[-1, 0, 1], true]]
for (let element of arrOfGivens) {
    console.log(`doubleOrTriple( [${element[0]}], ${element[1]} )`.padEnd(pads, ' '), '->', doubleOrTriple(element[0], element[1]))
}


/* Task 7
Requirement:
 Write a function named splitString() which takes a string and a number arguments and returns the string back split by the given number. 
 Note: Return empty string if the string shorter than splitting number or the string length is not divisible by the given number.
Examples:
 splitString("JavaScript", 5)  -> "JavaS cript"
 splitString("Java", 2)        -> "Ja va"
 splitString("Automation", 3)  -> ""
 splitString("Hello", 6)       -> ""
 splitString("12", 1)          -> "1 2"
*/
console.log('\n--- Task 6---' + ('-'.repeat(reps)))
const splitString = (str, num) => str.length < num || str.length % num !== 0 ? '""' : str.slice(0, num) + ' ' + str.slice(num)

arrOfGivens = [["JavaScript", 5], ["Java", 2], ["Automation", 3], ["Hello", 6], ["12", 1]]
for (let element of arrOfGivens) {
    console.log(`splitString( "${element[0]}", ${element[1]} )`.padEnd(pads, ' '), '->', splitString(element[0], element[1]))
}
