// Write a ts program to count total number of notes in given amount.

var userInput1:string|null = prompt("Enter the value of note : ");
var noteValue:number = Number(userInput1);

var userInput2:string|null = prompt("Enter the total amount : ");
var amount:number = Number(userInput2);

var totalNotes:number = amount / noteValue;

console.log(`Total No of Notes of ${noteValue}.Rupees in ${amount} are : ${totalNotes} `)


