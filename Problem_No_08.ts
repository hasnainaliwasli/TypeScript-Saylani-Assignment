// Write a ts program to input any alphabet and check whether it is vowel or consonant.

var userInput:string|null = prompt("Enter any Alphabet : ");
var x:any = (userInput);

if (x>='A' && x<='Z'){

    if(x=='A' || x=='E'|| x=='I'||x=='O'||x=='U')
    {
        console.log(`${x} is a Vovel`);
    }
    else{
        console.log("This is consonant");
        
    }
}

else{
    console.log("This is not an Alphabet");
    
}