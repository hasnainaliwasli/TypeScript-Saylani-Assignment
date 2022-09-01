/*Write a ts program to input basic salary of an employee and calculate its Gross salary according to following:
                                        Basic Salary <= 10000 : HRA = 20%, DA = 80%
                                       Basic Salary <= 20000 : HRA = 25%, DA = 90%
                                       Basic Salary > 20000 : HRA = 30%, DA = 95% */
var userInput1 = prompt("Enter Basic salary");
var basicSalary = Number(userInput1);
//    For calculation of hra of 20%.
var hraForLessThan10000 = Number((basicSalary * 20) / 100);
//    For Calculation of DA fo 80%.
var daForLessThan10000 = Number((basicSalary * 80) / 100);
var grossSalary1 = basicSalary + hraForLessThan10000 + daForLessThan10000;
//    For calculation of hra of 25%.
var hraForLessThan20000 = Number((basicSalary * 25) / 100);
//    For Calculation of DA fo 90%.
var daForLessThan20000 = Number((basicSalary * 90) / 100);
var grossSalary2 = basicSalary + hraForLessThan20000 + daForLessThan20000;
//    For calculation of hra of 30%.
var hraForGreaterthan20000 = Number((basicSalary * 30) / 100);
//    For Calculation of DA fo 95%.
var hraForGreaterthan20000 = Number((basicSalary * 95) / 100);
var grossSalary3 = basicSalary + hraForLessThan10000 + daForLessThan20000;
if (basicSalary < 0 || basicSalary > 0) {
    if (basicSalary < 10000) {
        console.log(grossSalary1);
    }
    else if (basicSalary < 20000) {
        console.log(grossSalary2);
    }
    else {
        console.log(grossSalary3);
    }
}
else {
    alert("Basic Salary Must be in Digits Form");
}
