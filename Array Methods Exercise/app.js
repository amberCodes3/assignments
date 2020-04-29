var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// Remove the last item from the vegetable array.
var popItem = vegetables.pop("lettuce");
console.log(popItem); 
console.log(vegetables);

// Remove the first item from the fruit array.
var shiftItem = fruit.shift("banana");
console.log(shiftItem); 
console.log(fruit);

// Find the index of "orange."
var index = fruit.indexOf('orange');
console.log(index);

// Add that number to the end of the fruit array.
var pushItem = fruit.push(1); 
console.log(fruit);

// Use the length property to find the length of the vegetable array.
console.log(vegetables.length);

// Add that number to the end of the vegetable array.
var pushItem = vegetables.push(3); 
console.log(vegetables);

// Put the two arrays together into one array. Fruit first. Call the new Array "food".
var food = fruit.concat(vegetables);
console.log(food);

// Remove 2 elements from your new array starting at index 4 with one method.
var sliceItem = food.splice(4, 2); 
console.log(food);

// Reverse your array.
food.reverse(); 
console.log(food);

// Turn the array into a string and return it.
console.log(food.join(" ")); 



/* If you've done everything correctly, the last step should print the following string to the console:
 3,pepper,1,watermelon,orange,apple*/

