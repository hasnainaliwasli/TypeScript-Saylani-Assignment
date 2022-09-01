 // Write a ts program to calculate profit or loss.

var userInput1:string|null = prompt("Enter total amount you Spent : ");
var amountSpent:number = Number(userInput1);

var userInput2:string|null = prompt("Enter total amount you Get : ");
var get:number = Number(userInput2);

var profitLoss:number = get - amountSpent ;

var profit:number = profitLoss;
var loss:number = -1 * profitLoss;

if(profitLoss>0){
    console.log(`Congratulations....! You got Profit amount: ${profit}`);
    
}

else if(profitLoss<0){
    console.log(`So sad ..! You got Loss of amount : ${loss} `);
    
}
else{
    console.log(`you not got Profit nor get Loss`);

}


