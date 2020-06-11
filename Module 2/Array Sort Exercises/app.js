//Use the built-in .sort() method on arrays to solve all of these problems:


//1) Sort an array from smallest number to largest
// => [1, 2, 3, 5, 20, 90] 

const leastToGreatest = [1, 3, 5, 2, 90, 20];

/*leastToGreatest.sort(function(a, b){
    return a - b
});*/

leastToGreatest.sort((a,b) => a - b);

console.log(leastToGreatest);


//2) Sort an array from largest number to smallest
// => [90, 20, 5, 3, 2, 1] 

const greatestToLeast = [1, 3, 5, 2, 90, 20];

/*greatestToLeast.sort(function(a,b){
    return b - a
});*/

greatestToLeast.sort((a,b) => b - a);

console.log(greatestToLeast);



//3) Sort an array from shortest string to longest
// => ["by", "dog", "wolf", "eaten", "family"] 

const lengthSort = ["dog", "wolf", "by", "family", "eaten"];

/*lengthSort.sort(function(a, b){
    return a.length -b.length
});*/

lengthSort.sort((a,b) => a.length - b.length);

console.log(lengthSort); 



//4) Sort an array alphabetically
// => ["by", "dog", "eaten", "family", "wolf"] 

const alphabetical = ["dog", "wolf", "by", "family", "eaten"];

alphabetical.sort();

console.log(alphabetical); 



//5) Sort the objects in the array by age
// => [ { name: 'Misunderstood Observer', age: 2 },
//  { name: 'Quiet Samurai', age: 22 },
//  { name: 'Unlucky Swami', age: 77 },
//  { name: 'Arrogant Ambassador', age: 100 } ]

const byAge = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
];

/*byAge.sort(function(a,b){
    return a.age - b.age
});*/

byAge.sort((a,b) => a.age - b.age);

console.log(byAge);

