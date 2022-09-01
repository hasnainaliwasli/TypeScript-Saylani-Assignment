// Write a ts program to check whether a number is negative, positive or zero.
var userInput = prompt("Enter the Number :");
var num3 = Number(userInput);
if (num3 < 0) {
    console.log(" Number is Negative");
}
else if (num3 > 0) {
    console.log("Number is Positive");
}
else if (num3 == 0) {
    console.log("Number is Zero");
}
else {
    console.log("This is not a Number");
}
