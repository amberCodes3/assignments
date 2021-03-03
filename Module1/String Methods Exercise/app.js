/*Make a function that will return any given string into all caps followed by the same string all lowercase.
capilizeAndLowercase("Hello") // => "HELLOhello"*/

var str= "Hello";
var uppCase = str.toUpperCase(); 
var lwrCase = str.toLowerCase();
console.log(uppCase,lwrCase);

// Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor().
// findMiddleIndex("Hello") // => 2
// findMiddleIndex("Hello World") // => 5




/* Make a function that uses slice() and the other functions you've written to return the first half of the string
 returnFirstHalf("Hello") // => "He"
 returnFirstHalf("Hello World") // => "Hello"*/

var str = "Hello World"; 
var newStr = str.slice(0, 2)
console.log(newStr);


