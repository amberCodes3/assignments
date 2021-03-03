const readlineSynce = require("readline-sync");

var num1 = readlineSynce.question("Please enter your first number:");
var num2 = readlineSynce.question("Please enter you second number:");
var operator = readlineSynce.question('Please enter the operation to perform: add, sub, mult, div')

let result;

switch(operator){
    case "add":
        result= parseFloat(num1)+parseFloat(num2)
        break;
    case "subt":
        result = parseFloat(num1)-parseFloat(num2)
        break;
    case "mult":
        result = parseFloat(num1)*parseFloat(num2)
        break;
    case "div":
        result = parseFloat(num1)/parseFloat(num2)
        break;
    default:
        result = ("That is not a valid operator. Try again.")
}
console.log(result);