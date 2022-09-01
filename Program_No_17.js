// Write a ts program to find all roots of a quadratic equation.
var userInput1 = prompt("Enter the value of 'b' : ");
var b = Number(userInput1);
var userInput2 = prompt("Enter the value of 'a' : ");
var a = Number(userInput2);
var userInput3 = prompt("Enter the value of 'c' : ");
var c = Number(userInput3);
var discriminant = (b * b - 4 * a * c);
var sqrt = Math.sqrt(discriminant);
var sqrt2 = Math.sqrt(-discriminant);
var root1 = -b + sqrt / 2 * a;
var root2 = -b - sqrt / 2 * a;
var root3 = -b / 2 * a;
// root no 4 have two real and imagenery parts so :
var realPart = -b / 2 * a;
var imagenaryPart = sqrt2 / 2 * a;
if (discriminant > 0) {
    console.log("Roots are Real and different which are : ".concat(root1, " and ").concat(root2));
}
else if (discriminant == 0) {
    console.log("Rotts are real and Equal which are : ".concat(root3));
}
else if (discriminant < 0) {
    console.log("Roots are Complex and Different which are : ".concat(realPart + imagenaryPart, "i and ").concat(realPart - imagenaryPart, "i "));
}
