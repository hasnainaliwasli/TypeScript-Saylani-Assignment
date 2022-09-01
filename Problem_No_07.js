// Write a ts program to check whether a character is alphabet or not.
var userInput = prompt("Enter an Alphabet : ");
var Alphabet = userInput;
if ((Alphabet >= 'A' && Alphabet <= 'Z') || (Alphabet >= 'a' && Alphabet <= 'z')) {
    console.log("This is an Alphabet");
}
else {
    console.log("This is not an Alphabet");
}
