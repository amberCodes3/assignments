var people = ["Jon:", "Jacob:", "Jingle:", "Heimer:", "Schmidt:"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"


function forception(people, alphabet){
    for(var i = 0; i < people.length; i++){
        console.log(people[i]);

        for(var j = 0; j < 1; j++){
            console.log(alphabet.split(""))
        }
    }
} 
 console.log(forception(people, alphabet));



// Write a function that takes two arrays as parameters. The first array will be an array of people's names, and the second array will be the alphabet. Using a for loop within a for loop, create and return array that looks like this:
 /*Output: 
 
 "Jon:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
 
 "Jacob:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
 
 "Jingle:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
 
 "Heimer:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
 
 "Schmidt:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"*/