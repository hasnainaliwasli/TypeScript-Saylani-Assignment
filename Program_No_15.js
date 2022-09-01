// Write a ts program to input all sides of a triangle and check whether triangle is valid or not.
var userInput1 = prompt("Enter 1st Side");
var side1 = Number(userInput1);
var userInput2 = prompt("Enter 2nd Side");
var side2 = Number(userInput2);
var userInput3 = prompt("Enter 3rd Side");
var side3 = Number(userInput3);
// Condition:Sum of All sides must be greater than third side.
if ((side1 + side2 > side3) && (side2 + side3 > side1) && (side3 + side1 > side2)) {
    console.log("This a valid triangle");
}
else {
    console.log("This is not a valid triangle");
}
