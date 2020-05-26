// 1.Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:
// ["dog", "cat", "mouse", "jackolope", "platypus"]

function collectAnimals(...animals) {  
    console.log(animals)
};

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"); 



// 2. Write a function that returns a food object with the array names as properties using Object Literals:
/*=> {
        fruit: ["apple", "pear"],
        sweets: ["cake", "pie"],
        vegetables: ["carrot"]
     }*/

function combineFruit(fruit, sweets, vegetables){

   return {
       fruit,
       sweets,
       vegetables
   }
}

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"])
            );
