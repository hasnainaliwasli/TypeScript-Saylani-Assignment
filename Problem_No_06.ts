// Write a ts program to check whether a year is leap year or not.

var userInput:string|null = prompt("Enter an year : ");
var year:number = Number(userInput);

if(year%400==0) 
{
    console.log(`The Year ${year} is a Leap Year.(It has 366 Days.)`);
}

else if(year%100==0){
    console.log(`${year} is not a Leap year`);
}

else if(year%4==0){
    console.log(`The Year ${year} is a Leap Year.(It has 366 Days.)`)
}

