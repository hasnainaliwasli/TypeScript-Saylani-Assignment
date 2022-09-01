// Write a ts program to find all roots of a quadratic equation.

var userInput1:string|null = prompt("Enter the value of 'b' : ");
var b:number = Number(userInput1);

var userInput2:string|null = prompt("Enter the value of 'a' : ");
var a:number = Number(userInput2);

var userInput3:string|null = prompt("Enter the value of 'c' : ");
var c:number = Number(userInput3);

var discriminant:number = (b*b - 4*a*c)

var sqrt:number = Math.sqrt(discriminant);

var sqrt2:number = Math.sqrt(-discriminant);

var root1:number = -b + sqrt / 2*a;
var root2:number = -b - sqrt / 2*a;
var root3:number = -b / 2*a;

// root no 4 have two real and imagenery parts so :
var realPart:number = -b/2*a;
var imagenaryPart:number = sqrt2/2*a;
 



if(discriminant>0){
    console.log(`Roots are Real and different which are : ${root1} and ${root2}` );
    
}

else if(discriminant==0){
    console.log(`Rotts are real and Equal which are : ${root3}`);
    
}
else if(discriminant<0){
    console.log(`Roots are Complex and Different which are : ${realPart + imagenaryPart}i and ${realPart - imagenaryPart}i `);
    
}
