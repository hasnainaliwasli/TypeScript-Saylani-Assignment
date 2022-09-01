// Write a ts program to check whether a character is alphabet or not.

var userInput:string|null = prompt("Enter an Alphabet : ");
var Alphabet:any =userInput


if (( Alphabet >= 'A' && Alphabet <= 'Z') || (Alphabet >='a' && Alphabet <= 'z'))
{
    console.log("This is an Alphabet");
}
else{
    console.log("This is not an Alphabet");
}
