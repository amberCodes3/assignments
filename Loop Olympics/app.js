
// Write a for loop that prints to the console the numbers 0 through 9.
for(var i = 0; i <= 9; i++){
    console.log(i)
}

// Write a for loop that prints to the console 9 through 0.
for(var i = 9; i >= 0; i--){
    console.log(i)
}

// Write a for loop that prints these fruits to the console.
var fruit = ["banana", "orange", "apple", "kiwi"]

for(var i = 0; i < fruit.length; i++){
    console.log(fruit[i])
}


// Write a for loop that will push the numbers 0 through 9 to an array.
    var num = [ ]

    for(var i = 0; i <= 0; i++){
        num.push("0","1,","2","3","4","5","6","7","8","9");
     }
     console.log(num)
        

// Write a for loop that prints to the console only even numbers 0 through 100.
 for(var i = 0; i <= 100; i+= 2){
    console.log(i)
 }
        
// Write a for loop that will push every other fruit to an array.
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

for(var i = 0; i < fruit.length; i+= 2){
    console.log(fruit[i])
}


var peopleArray = [
    {
        name: "Harrison Ford",
        occupation: "Actor"
    },
    {
        name: "Justin Bieber",
        occupation: "Singer"
    },
    {
        name: "Vladimir Putin",
        occupation: "Politician"
    },
    {
        name: "Oprah",
        occupation: "Entertainer"
    }
]

// Write a loop that will print out all the names of the people of the people array
for(var i = 0; i < peopleArray.length; i++){
    console.log(peopleArray[i].name)
}

// Write a loop that pushes the names into a names array, and the occupations into an occupations array.
var nmeArr = [ ]
var occArr = [ ]

for(var i = 0; i < peopleArray.length; i++){
    nmeArr.push(peopleArray[i].name)
    occArr.push(peopleArray[i].occupation)
}
    console.log(nmeArr);
    console.log(occArr);


//  Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", and every other occupation to another array starting with, in this case, "Singer".
var nmeArr = [ ]
var occArr = [ ]

for(var i = 0; i < peopleArray.length; i+=2){
    nmeArr.push(peopleArray[i].name)
}
console.log(nmeArr)

for(var i = 1; i < peopleArray.length; i+=2){
    occArr.push(peopleArray[i].occupation)
}
console.log(occArr)


// Create an array that mimics a grid like the following using nested for loops:
// [[0, 0, 0], 
// [0, 0, 0], 
// [0, 0, 0]]

var arr = [[0,0, 0], [0,0,0], [0,0,0]];

for (var i = 0; i < arr.length; i++){
    for (var j = 0; j < arr[i].length; j++){
        console.log( arr[i][j] );
    }
}

//Create an array that mimics a grid like the following using nested for loops:
// [[0, 0, 0], 
// [1, 1, 1], 
// [2, 2, 2]]

var arr = [[0,0,0], [1,1,1], [2,2,2]];

for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr[i].length; j++){
        console.log( arr[i][j]);
    }
}

// Create an array that mimics a grid like the following using nested for loops:

// [[0, 1, 2], 
// [0, 1, 2], 
// [0, 1, 2]]

var arr = [[0,1,2], [0,1,2], [0,1,2]];

for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr[i].length; j++){
        console.log( arr[i][j]);
    }
}
