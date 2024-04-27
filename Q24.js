// Question 24
// More Conditional Tests: You don’t have to limit the number of tests
// you create to 10. If you want to try more comparisons, write more 
// tests. Have at least one True and one False result for each of the
// following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than
// and less than, greater than or equal to, and less than or equal to.
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// 1st test
// • Tests for equality and inequality with strings
console.log("Equality Test with strings");
console.log("a" == "a"); // true
// console.log("a" == "A"); // false
// 2nd test
// • Tests using the lower case function
console.log("Testing with lower case function");
console.log("A".toLowerCase() == "a"); // true
// 3rd test
// • Numerical tests involving equality and inequality, greater than and less than,
// greater than or equal to, and less than or equal to.
var num1 = 5;
var num2 = 10;
console.log("Numerical tests");
// Equality
console.log("Equality test:", num1 === num2); // false
// Inequality
console.log("Inequality test:", num1 !== num2); // true
// Less than 
console.log("Less than test:", num1 < num2); // true
// Greater than
console.log("Greater than test:", num1 > num2); // false
// Greater than or equal to
console.log("Greater than or equal to test:", num1 >= num2); // false
//  Less than or equal to
console.log("Less than or equal to test:", num1 <= num2); // true
// 4th test
// • Tests using "and" and "or" operators
var a = 5;
var b = 10;
var c = 15;
// AND operatiors
if (a > b && b < c) {
    console.log("Both Condition are true");
}
else {
    console.log("one Conditions is false");
}
;
// OR operator
var x = 5;
var y = 10;
var z = 15;
// Test for at least one condition being true
if (x > y || y > z) {
    console.log("Atleast one Conditions is true");
}
else {
    console.log("All condition are false");
}
;
// 5th test
// • Test whether an item is in a array
var fruits = ["apple", "orange", "Cherry", "banana"];
console.log(fruits.includes("apple"));
console.log("apple is included in the array");
// • Test whether an item is not in a array
console.log(!fruits.includes("mango"));
console.log("mango is not included in the array");
