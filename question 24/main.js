var favCoffee = "Cappuccino";
console.log(favCoffee == "Cappuccino");
console.log(favCoffee == "cold coffee");
//lower case Function
var lowerCase = favCoffee.toLowerCase();
console.log(lowerCase == "cappuccino");
console.log(lowerCase == "CAPPUCCINO");
//Numerical test
var num = 5;
console.log(num == 5);
console.log(num != 5);
console.log(num > 4);
console.log(num < 5);
console.log(num >= 5);
console.log(num <= 6);
// Testing using and & or 
console.log(favCoffee == "Cappuccino" && num == 5);
console.log(favCoffee == "Cappuccino" || num == 9);
console.log(favCoffee == "Cappuccino" && num == 8);
console.log(favCoffee == "Cold coffee" || num == 95);
//Testing wheather an item is in an array or not in an array
var newArray = ["apple", "mango", "banana", "grapes"];
console.log(newArray.includes("apple"));
console.log(newArray.includes("Strawberry"));
