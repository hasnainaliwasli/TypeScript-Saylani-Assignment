// Write a ts program to count total number of notes in given amount.
var userInput1 = prompt("Enter the value of note : ");
var noteValue = Number(userInput1);
var userInput2 = prompt("Enter the total amount : ");
var amount = Number(userInput2);
var totalNotes = amount / noteValue;
console.log("Total No of Notes of ".concat(noteValue, ".Rupees in ").concat(amount, " are : ").concat(totalNotes, " "));
