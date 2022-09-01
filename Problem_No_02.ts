// Write a ts program to find maximum between three numbers.

var userInput1:string|null = prompt("Enter 1st number : ");
var x:number = Number(userInput1);

var userInput2:string|null = prompt("Enter 2nd number : ");
var y:number = Number(userInput2);

var userInput3:string|null = prompt("Enter 3rd number : ");
var z:number = Number(userInput3);

if (x==y && y==z){
    console.log(`All numbers are equal`);
}
else  {
console.log("The maximum Number is "+Math.max(x,y,z));
}
