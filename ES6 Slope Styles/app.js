// 1. Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:
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
       fruit, sweets, vegetables
   }
};

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"])
            );


// 3. Use destructuring to use the property names as variables. Desructure the object in the parameter:

const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
  };
  
  function parseSentence(){
    return `We're going to have a good time in ${vacation.location} for ${vacation.duration}`
  };

  console.log(parseSentence(vacation));



// 4. Use destructuring to make this code ES6:                                       *****

  function returnFirst(items){
    const firstItem = items[0]; /*change this line to be es6*/
    return firstItem
}

console.log(returnFirst);



// 5. Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in:
// => ["dog", "cat", "mouse", "jackolope", "platypus"]

function combineAnimals() {  
    let arr = [...realAnimals, ...magicalAnimals, ...mysteriousAnimals]
    console.log(arr)
};

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals); 



// 6. Try to make the following function more ES6xy:                                    ******

function product(a, b, c, d, e) {  
    var numbers = [a,b,c,d,e];
  
    return numbers.reduce(function(acc, number) {
      return acc * number;
    }, 1)
  };

function product(a, b, c, d, e) {  
    var numbers = [a,b,c,d,e];
  
    return numbers.reduce((acc, number) => acc * number)
  };

 console.log(product);



 // 7.Make the following function more ES6xy. Use at least both the rest and spread operators:             ******  

//  function unshift(array, a, b, c, d, e) {  
//     return [a, b, c, d, e].concat(array);
//   };

  function unshift(array, a, b, c, d, e) {
    return [...a, b, c, d, e, ...array];
    
  };

  console.log(unshift);