/*Write a ts program to input electricity unit charges and calculate total electricity bill according to the given condition: <br>
                                For first 50 units Rs. 0.50/unit
                                For next 100 units Rs. 0.75/unit
                                For next 100 units Rs. 1.20/unit
                                For unit above 250 Rs. 1.50/unit
                                An additional surcharge of 20% is added to the bill */
var userInput = prompt("Enter Total Units : ");
var Units = Number(userInput);
var Bill, totalBill;
if (Units <= 50) {
    Bill = Units * 0.50;
}
else if (Units <= 150) {
    Bill = Units * 0.75;
}
else if (Units <= 250) {
    Bill = Units * 1.20;
}
else {
    Bill = Units * 1.50;
}
var percent = Bill * 20 / 100;
totalBill = Bill + percent;
console.log("The Bill is " + totalBill);
