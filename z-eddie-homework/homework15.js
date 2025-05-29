const reps = 100, pads = 65
/* Task 1 
Requirement:
 Write a function named toCamelCase() which takes a string as its argument and returns a new string
 in camelCase. Assume the string only contains letters and spaces
Examples:
 toCamelCase("first name")           ->"firstName"
 toCamelCase("last     name")        ->"lastName"
 toCamelCase("   ZIP CODE")          ->"zipCode"
 toCamelCase(“I Learn Java Script”)  ->"iLearnJavaScript"
 toCamelCase(“helloWorld”)           ->“helloWorld”
*/
console.log('\n--- Task 1 ---' + ('-'.repeat(reps)))
const toCamelCase = str => {
    let strArr = str.trim().split(' ').filter(e => e.length > 0)
    let result
    strArr.length > 1
        ? result = strArr.map((e, i) => i ? e[0].toUpperCase() + e.slice(1).toLowerCase() : e.toLowerCase())
        : result = strArr
    return result.join('')
}

let arrOfGivens = ['first name', 'last     name', '   ZIP CODE', 'I Learn Java Script', 'helloWorld']
for (let element of arrOfGivens) {
    console.log(`toCamelCase(${element})`.padEnd(pads, ' '), '-> ', toCamelCase(element))
}
