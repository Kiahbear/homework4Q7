/*
 * homework 4 question 7
 * Kiah Nicholson-Wilcox
 */

let sales = [];
let total = 0;
let dailySale = 0;
let counter = 1;
while (counter <= 5){
    dailySale = prompt("Enter the days’ sales: ");
    dailySale = Number(dailySale);
    total = total + dailySale;
    sales.push(dailySale);
    counter = counter + 1;
}
let salesList = sales.join(", ");
document.write("<br>Daily Sales were: " + salesList);
document.write("<br>Total sales are: $" + total);
