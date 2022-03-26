// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

//Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"

// Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"

// Psuedo Code
// Start if by creating a function using const and fat arrow method
// looking to have two input parameters for strings to return the variable with the longest string 
// Create multiple console.log with arguments to see results in terminal 

//---------- SOLUTION CODE
// const bigFruit = ( str1, str2 ) => {
//     if(str1.length > str2.length ){
//         return str1
//     }else if (str1.length < str2.length){
//         return str2
//     }else if (str1.length = str2.length){
//         return "String length is the same"
//     }else{
//         return "Try again"
//     }
//     }
// console.log(bigFruit(fruit1,fruit2))
// output = banana
// console.log(bigFruit(fruit3,fruit2))
// output = "String length is the same" 
// console.log(bigFruit(fruit4,fruit1))
// output = apple



// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// const temp1 = 42
// const temp2 = 350
// const temp3 = 212

//-------------------------------PSUEDO CODE---------------------------


// Create a function 
// Add num as a parameter for the function 
// Create condtionals to guage below, above and at boiling points using string interpolation
// Check logic by creating console.logs 



// const boilingPoint = (num) =>{
//     if (num > 212) {
//         return `${num} is above the boiling point`
//     }else if (num < 212){
//         return `${num} is below the boiling point`
//     }else if(num == 212){
//         return `${num} is at the boiling point`
//     }
// }
// console.log(boilingPoint(temp3))
// output = "212 is at the boiling point"
// console.log(boilingPoint(temp1))
// output = "42 is below the boiling point"
// console.log(boilingPoint(temp2))
// output = "350 is above the boiling point"




// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// const myNumbers1 = [3, 7, 0, 36, -9]
// const myNumbers2 = [8, -7, 42, 9, 13]

//-------------------------------PSUEDO CODE---------------------------

// Create a comboNumbers for a new array 
// Use built-in method concat to combine both arrays
// Use accessor method .length to return new array length 
// Console.log new variable to see results

// const comboNumbers = myNumbers1.concat(myNumbers2)

// console.log(comboNumbers.length)
// output = 10



// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "1202 ovarB"

// const currentCohort = "Bravo 2022"


//-------------------------------PSUEDO CODE---------------------------

// Use .split() built in method to change string into an array
// Use .reverse() built in method to reverse the newly created array
// Use .join() built in method to change array into a string and combine
// Write a console.log to show results

// const reverseString =(str) => {
//     return str.split('').reverse().join('')
//   }
//   console.log(reverseString(currentCohort))
//   output: "1202 ovarB"


// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// const myArray = [13, 34, 5, 10, 27, 42]


//-------------------------------PSUEDO CODE---------------------------

// Create a for loop to loop through the array and test each element
// Create  if , if else staments to evaluate which numbers are even and which ones are odd


// const result = (myArray % 2  == 0) ? "even" : "odd";
// for(let i=0; i<myArray.length; i++){
//     if(myArray[i] % 2 == 0){
//       console.log("even")
//     }else if(myArray[i] % 2 !== 0){
//         console.log("odd")
//     }
//   }
// Output 
// odd
// even
// odd
// even
// odd
// even


// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3



// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24


//-------------------------------PSUEDO CODE---------------------------

// Create a function with a variable const subtractNum
// Add two parameter to taken in arguments to run code for 
// Create an if and else if statment 
// Run console.logs to see the output  

const subNum = (a,b) => {
    if( a > b){
        return a - b
    }else if ( a < b){
        return b - a 
    }
}
console.log(subNum(number1,number2))
console.log(subNum(number3, number4))

// Output = 42
// Output = 3