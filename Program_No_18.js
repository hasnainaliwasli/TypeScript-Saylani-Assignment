// Write a ts program to calculate profit or loss.
var userInput1 = prompt("Enter total amount you Spent : ");
var amountSpent = Number(userInput1);
var userInput2 = prompt("Enter total amount you Get : ");
var get = Number(userInput2);
var profitLoss = get - amountSpent;
var profit = profitLoss;
var loss = -1 * profitLoss;
if (profitLoss > 0) {
    console.log("Congratulations....! You got Profit amount: ".concat(profit));
}
else if (profitLoss < 0) {
    console.log("So sad ..! You got Loss of amount : ".concat(loss, " "));
}
else {
    console.log("you not got Profit nor get Loss");
}
