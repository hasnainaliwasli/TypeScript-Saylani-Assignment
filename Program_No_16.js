// Write a ts program to check whether the triangle is equilateral, isosceles or scalene triangle.
var userInput1 = prompt("Enter Side 1 of the Triangle : ");
var userInput2 = prompt("Enter Side 2 of the Triangle : ");
var userInput3 = prompt("Enter Side 3 of the Triangle : ");
var side1 = Number(userInput1);
var side2 = Number(userInput2);
var side3 = Number(userInput3);
if ((side1 == side2) && (side2 == side3)) {
    console.log('This is Equlateral Triangle.');
}
else if ((side1 == side2) || (side2 == side3)) {
    console.log('This is Isosceles Triangle.');
}
else {
    console.log('This is Scalene Triangle.');
}
