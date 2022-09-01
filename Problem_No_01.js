// Write a ts program to find maximum between two numbers 
var userInput1 = prompt("Enter 1st number : ");
var x = Number(userInput1);
var userInput2 = prompt("Enter 2nd number : ");
var y = Number(userInput2);
if (x == y) {
    console.log("Both numbers are equal");
}
else {
    console.log("The maximum Number is " + Math.max(x, y));
}
