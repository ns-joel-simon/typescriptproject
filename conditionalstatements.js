// if Statement
// Syntax:
// if (condition) {
//     // Code to execute if condition is true
// }
// Example:
var age = 20;
if (age >= 18) {
    console.log("You are an adult.");
}
// if else
// syntax
// if (condition) {
//     // Code to execute if condition is true
// } else {
//     // Code to execute if condition is false
// }
// example
var isLoggedIn = false;
if (isLoggedIn) {
    console.log("Welcome back!");
}
else {
    console.log("Please log in.");
}
// if-else if-else Statement
// syntax
// if (condition1) {
//     // Code to execute if condition1 is true
// } else if (condition2) {
//     // Code to execute if condition2 is true
// } else {
//     // Code to execute if none of the conditions are true
// }
// example
var score = 75;
if (score >= 90) {
    console.log("Grade: A");
}
else if (score >= 80) {
    console.log("Grade: B");
}
else if (score >= 70) {
    console.log("Grade: C");
}
else {
    console.log("Grade: F");
}
// switch Statement
// syntax
// switch (expression) {
//     case value1:
//         // Code to execute if expression === value1
//         break;
//     case value2:
//         // Code to execute if expression === value2
//         break;
//     default:
//         // Code to execute if no cases match
// }
// example
var day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}
// // Ternary Operator
// // Syntax:
// // condition ? expressionIfTrue : expressionIfFalse;
// // Example:
// let age: number = 20;
// let message: string = age >= 18 ? "You are an adult." : "You are a minor.";
// console.log(message);
