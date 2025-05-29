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


/* Task 2
Requirement:
 Write a function named toSnakeCase() which takes a string as its argument and returns a new string 
 in snake_case. Assume the string only contains letters and spaces
NOTE: In snake case words are separated by underscores (_) and are all lowercase.
Examples:
 toSnakeCase("first name")              ->"first_name"
 toSnakeCase("last    name")            ->"last_name"
 toSnakeCase("    I love Java Script")  ->"i_love_java_script"
 toSnakeCase("already_snake_case")      -> "already_snake_case"
 toSnakeCase("hello")                   ​-> "hello"
*/
console.log('\n--- Task 2 ---' + ('-'.repeat(reps)))
const toSnakeCase = str => {
    let strArr = str.trim().split(' ').filter(e => e.length > 0)
    let result
    strArr.length > 1
        ? result = strArr.map(e => e.toLowerCase()) : result = strArr
    return result.join('_')
}

arrOfGivens = ['first name', 'last     name', ' I love Java Script', 'already_snake_case', 'hello']
for (let element of arrOfGivens) {
    console.log(`toSnakeCase(${element})`.padEnd(pads, ' '), '-> ', toSnakeCase(element))
}


/* Task 3
Requirement:
Write a function named alternatingCases() which takes a string argument and returns the string with alternating capitalization.
NOTE: The first letter should always be uppercase and non-letter characters are ignored.
 Examples:
alternatingCases("Hello")          -> "HeLlO"
alternatingCases("basketball")     -> "BaSkEtBaLl"
alternatingCases("Tech Global")    -> "TeCh GlObAl"
alternatingCases("")               -> ""
alternatingCases("123!@#aB")       -> "123!@#Ab"
*/
console.log('\n--- Task 3 ---' + ('-'.repeat(reps)))
const alternatingCases = str => {
    let strArr = str.trim().split('')
    let counter = 0
    let result
    result = strArr.map((e, i) => {
        counter++
        return /[a-z]/i.test(e) && counter % 2 === 0 ? e.toLowerCase() : e.toUpperCase()

    }
    )
    return result.join('')

}

arrOfGivens = ['Hello', 'basketball', 'Tech Global', '', '123!@#aB']
for (let element of arrOfGivens) {
    console.log(`alternatingCases(${element})`.padEnd(pads, ' '), '-> ', alternatingCases(element))
}
