// Write a ts program to check whether a year is leap year or not.
var userInput = prompt("Enter an year : ");
var year = Number(userInput);
if (year % 400 == 0) {
    console.log("The Year ".concat(year, " is a Leap Year.(It has 366 Days.)"));
}
else if (year % 100 == 0) {
    console.log("".concat(year, " is not a Leap year"));
}
else if (year % 4 == 0) {
    console.log("The Year ".concat(year, " is a Leap Year.(It has 366 Days.)"));
}
