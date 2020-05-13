//Use the built-in array method .filter() to solve all of these problems

//1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
// [6, 8]

const arr = [3, 6, 8, 2]

/*const fiveAndGreaterOnly = arr.filter(function(num){
    if(num > 5){
        return true
    }
});*/
const fiveAndGreaterOnly = arr.filter(num => num > 5)

console.log(fiveAndGreaterOnly); 



//2) Given an array of numbers, return a new array that only includes the even numbers.
// [6, 8, 2]

/*const evensOnly = arr.filter(function(even){
    if (even % 2 === 0){
        return true
    }
});*/
const evensOnly = arr.filter(even => even % 2 === 0)

console.log(evensOnly); 



//3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
// ["by", "dog", "wolf", "eaten"]

const outside = ["dog", "wolf", "by", "family", "eaten", "camping"]

/*const fiveCharactersOrFewerOnly = outside.filter(function(y){
    if (y.length <= 5 ){
        return true
    }
});*/
const fiveCharactersOrFewerOnly = outside.filter(y => y.length <= 5)

console.log(fiveCharactersOrFewerOnly);



//4) Given an array of people objects, return a new array that has filtered out all those who DON'T belong to the club.
//[ { name: 'Angelina Jolie', member: true },
//  { name: 'Paris Hilton', member: true },
//  { name: 'Bob Ziroll', member: true } ]

const people = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
];

/*const peopleWhoBelongToTheIlluminati = people.filter(function(person){
    if(person.member === true){
        return true
    }
});*/
const peopleWhoBelongToTheIlluminati = people.filter(person => person.member);

console.log(peopleWhoBelongToTheIlluminati);


//5) Make a filtered list of all the people who are old enough to see The Matrix (younger than 18)
//[ { name: 'Angelina Jolie', age: 80 },
//  { name: 'Bob Ziroll', age: 100 } ]

const peopleAge = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]

/*const ofAge = peopleAge.filter(function(person){
    if(person.age >= "18"){
        return true
    }
});*/
const ofAge = peopleAge.filter(person => person.age >= 18);

console.log(ofAge); 
