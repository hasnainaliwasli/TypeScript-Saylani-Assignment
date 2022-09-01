// Write a ts program to input any alphabet and check whether it is vowel or consonant.
var userInput = prompt("Enter any Alphabet : ");
var x = (userInput);
if (x >= 'A' && x <= 'Z') {
    if (x == 'A' || x == 'E' || x == 'I' || x == 'O' || x == 'U') {
        console.log("".concat(x, " is a Vovel"));
    }
    else {
        console.log("This is consonant");
    }
}
else {
    console.log("This is not an Alphabet");
}
