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

