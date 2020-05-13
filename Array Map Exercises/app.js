//Use the built-in .map() method on arrays to solve all of these problems


//1) Make an array of numbers that are doubles of the first array
// [4, 10, 200]

const arr = [2, 5, 100];  

/*const doubleNumbers = arr.map(function(arr){
    return arr * 2
});*/
const doubleNumbers = arr.map(arr => arr * 2);

 console.log(doubleNumbers);



//2) Take an array of numbers and make them strings       *****
// ["2", "5", "100"]

const stringItUp = arr.map(function(num){
    return arr.join(" ")
}); 

console.log(stringItUp);



//3) Capitalize each of an array of names                  *****
// ["John", "Jacob", "Jingleheimer", "Schmidt"]

const names = ["john", "JACOB", "jinGleHeimer", "schmidt"]

const capitalizeNames = names.map(function(name){
    return name.toUpperCase[0]
});

console.log(capitalizeNames);



//4) Make an array of strings of the names
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

const people = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
];

/*const namesOnly = people.map(function(x){
    return x.name
});*/
const namesOnly = people.map(x => x.name)

console.log(namesOnly);



//5) Make an array of strings of the names saying whether or not they can go to The Matrix
// ["Angelina Jolie can go to The Matrix", 
// "Eric Jones is under age!!", 
// "Paris Hilton is under age!!", 
// "Kayne West is under age!!", 
// "Bob Ziroll can go to The Matrix"]

const makeStrings = people.map(function(y){
    if(y.age > "18"){
       return `${y.name} can go to The Matrix`
    } else{
        return `${y.name} is under age!!`
    }
});

console.log(makeStrings);



//6) Make an array of the names in h1s, and the ages in h2s                *****
// ["<h1>Angelina Jolie</h1><h2>80</h2>", 
// "<h1>Eric Jones</h1><h2>2</h2>", 
// "<h1>Paris Hilton</h1><h2>5</h2>", 
// "<h1>Kayne West</h1><h2>16</h2>", 
// "<h1>Bob Ziroll</h1><h2>100</h2>"]

const readyToPutInTheDOM = people.map(function(header){
    if(header === "name"){
        return `<h1>${header.name}</h1>`
    }else if (header === "age"){
        return `<h2>${header.age}</h2>`
    }
});

console.log(readyToPutInTheDOM);