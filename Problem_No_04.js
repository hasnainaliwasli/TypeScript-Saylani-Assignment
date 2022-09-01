// Write a ts program to check whether a number is divisible by 5 and 11 or not.
var userInput = prompt("Enter the Number : ");
var Num4 = Number(userInput);
if (Num4 % 5 == 0 && Num4 % 11 == 0) {
    console.log("Number is divisible by both 5 and 11");
}
else {
    console.log("Number is not divisible by both 5 and 11");
}
