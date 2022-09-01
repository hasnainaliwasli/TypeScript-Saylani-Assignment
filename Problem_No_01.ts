// Write a ts program to find maximum between two numbers 

var userInput1:string|null = prompt("Enter 1st number : ");
var x:number = Number(userInput1);

var userInput2:string|null = prompt("Enter 2nd number : ");
var y:number = Number(userInput2);

if (x==y){
    console.log(`Both numbers are equal`);
    
}
else{
console.log("The maximum Number is "+Math.max(x,y));
}