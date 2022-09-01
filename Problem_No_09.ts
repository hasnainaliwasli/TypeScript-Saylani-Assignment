// Write a ts program to input any character and check whether it is alphabet, digit or special character.

var userInput:string|null = prompt("Enter any character : ");
var ch:any = (userInput);

if ((ch >='A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z'))
{
    console.log("This is an Alphabet");
}
else if(ch>=0 || ch<=0)
{
    console.log("This is a Digit");
    
}

else
{
    console.log("This is a special character"); 
}