/*Replace all the vars with let and const. Alter the code however necessary to make sure this continues to work (so the pet's name isn't "John", but instead "spot" is returned). You only need to delete var and insert let and const

John is the pet owner, and his name should be stored differently than the other names.*/

let name = "John"
const age = 101

function runForLoop(pets) {
    let petObjects = []
    for (var i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
};

runForLoop(["cat", "dog"]);



//1. Re-write this .map() using an arrow function:

const carrots = ["bright orange", "ripe", "rotten"]

//=>
// function mapVegetables(arr) {
//     return arr.map(function(carrot) {
//         return { type: "carrot", name: carrot }
//     })
// };

function mapVegetables(arr) {
    return arr.map(carrot => ({ type: "carrot", name: carrot }))
};

console.log(mapVegetables(carrots)); 



//2. Re-write this .filter() using an arrow function:

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
];

//=>
// function filterForFriendly(arr) {
//     return arr.filter(function(person) {
//         return person.friendly
//     })
// };

function filterForFriendly(arr) {
    return arr.filter(person => person.friendly)
};

console.log(filterForFriendly(people));



// 3. Re-write the following functions to be arrow functions:

// =>
// function doMathSum(a, b) {
//     return a + b
// };

function doMathSum(a, b) {
    (a, b => a + b)
};

console.log(doMathSum);

//=>
// var produceProduct = function(a, b) {
//     return a * b
// };

let produceProduct = (a, b) => a * b

console.log(produceProduct);



/* 4. Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:
Hi Kat Stark, how does it feel to be 40?*/ 

/*firstName should default to "Jane"
lastName should default to "Doe"
age should default to 100*/

let person = [
    {
    firstName : "Jane",
    lastName : "Doe",
    age :  100
    }
];

function printString( firstName = "Jane", lastName = "Doe", age= "40" ) {
    return `Hi, ${firstName} ${lastName}, how does it feel to be ${age}?`
};

//console.log(printString( 'Kat', 'Stark', '40'))
console.log(printString(person)); 




//5. Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];

//=> 
//  function filterForDogs(arr) {
//      return arr.filter(animal => {
//          if (animal.type === "dog") {
//              return true
//          } else {
//              return false
//          }
//      })
//  };

function filterForDogs(arr){
    return arr.filter(animal => animal.type === "dog", true, false)
}
console.log(filterForDogs(animals));