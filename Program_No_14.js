// Write a ts program to input angles of a triangle and check whether triangle is valid or not.
var userInput1 = prompt("Enter 1st Angle : ");
var angle1 = Number(userInput1);
var userInput2 = prompt("Enter 2nd Angle :");
var angle2 = Number(userInput2);
var userInput3 = prompt("Enter 3rd Angle :");
var angle3 = Number(userInput3);
var sum = angle1 + angle2 + angle3;
if ((sum == 180) && (angle1 > 0) && (angle2 > 0) && (angle3 > 0)) {
    console.log("Triangle is valid");
}
else {
    console.log("Triangle is not Valid");
}
