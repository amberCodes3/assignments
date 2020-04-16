const readlineSynce = require("readline-sync");
var name = readlineSynce.question("What is your name? ");
var question = readlineSynce.question("You are locked in a room, do you want to play?");
var option = readlineSynce.question("What would you like to do: Put hand in hole or Find the key?"); 

let result; 

    if (option === "Find the key"){
    console.log("Congratulation, you found your way out of the room. Open the door.")
 }  else if (option === "Put hand in hole"){
     console.log("You die")
 }  else{
     console.log("HELP")
 }
 console.log(result);