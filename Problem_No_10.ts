// Write a ts program to check whether a character is uppercase or lowercase alphabet.

var userInput1:string|null = prompt(`Enter a Character : `);
var alphabet:any =(userInput1);

if(alphabet >= 'a' && alphabet<='z')
{
    console.log(`This is a Lowercase Alphabet.`);
    
}
else if(alphabet >= 'A' && alphabet<='Z' || alphabet >= 'a' && alphabet<='z')
{
    console.log(`This is a Uperercase Alphabet.`);
    
}
else
{
    console.log(`This is not An Alphabet.`);
    
}