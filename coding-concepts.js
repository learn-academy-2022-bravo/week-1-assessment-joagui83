// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
//console.log(colors.push("indigo"))

// a) Your answer:5
// b) Verify and explain:5; When you use built-in method .push it adds the element and returns the number of elements in the array which is 5


// --------------------1) What will this log?

//const cohort = "LEARN 2022"
 //console.log(cohort.length)

// a) Your answer: 10 
// b) Verify and explain:10; Built-in method .length of a string which in this case it is 10


// --------------------2) What will this log?

// const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer:"o"
// b) Verify and explain: "o"; When using [] it calls upon the index value of a variable which is "o" in "Hello World!"


// --------------------3) What will this log?

// const languages = ["JavaScript", "Ruby", "Python", "C++"]
// const index = 1
// console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: Ruby; The variable index was assigned the value of 1 to reference the element Ruby, which is in the index of 1, in the languages variable. 


// --------------------4) What will this log?

// const weekendDays = ["saturday", "sunday"]
//  console.log(weekendDays[0].toUpperCase())

// a) Your answer:"SATURDAY", "SUNDAY"
// b) Verify and explain:TypeError: weekendDays.toUpperCase is not a function; .toUpperCase applies to strings so the logic would have to be written as such:
// for(var i = 0; i < weekendDays.length; i++){
//     weekendDays[i] = weekendDays[i].toUpperCase();
// }
// console.log(weekendDays)
// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: undefined
// b) Verify and explain:"number"; typeOf evaluates the type of operand and returns the data type of its operand as a string. 
