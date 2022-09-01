// Write a ts program to find maximum between three numbers.
var userInput1 = prompt("Enter 1st number : ");
var x = Number(userInput1);
var userInput2 = prompt("Enter 2nd number : ");
var y = Number(userInput2);
var userInput3 = prompt("Enter 3rd number : ");
var z = Number(userInput3);
if (x == y && y == z) {
    console.log("All numbers are equal");
}
else {
    console.log("The maximum Number is " + Math.max(x, y, z));
}
