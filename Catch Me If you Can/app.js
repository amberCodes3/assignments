//1a) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number:
//1b) Call the sum function inside a try block using "1" and "2" as arguments. Use console.log within a catch block to inform the user of the error.

function sum(x,y){
    console.log(typeof x, y)
    if(typeof x !== "number"){
        throw "Supposed to be type number"
    }else if( typeof y !== "number"){
        throw "Supposed to be type of number 2"
    }else{
        return x + y
    }
};

console.log(sum("1", 2)); 

try{
  sum(1, 2)
} catch(err){
    console.log(err);
} finally{
    console.log("Runs no matter what");
};


//2a) Given a user object, write a function called login that takes a username and password as parameters. Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!"
//2b) Call the login function within a try block. In one instance use the correct credentials, and in another use incorrect ones. Make sure you see the appropriate message!

var user = {username: "sam", password: "123abc"};

function login(username, password){
  if( username === password){
      return "Login successful"
  } else{
      throw "Username and Password do not match"
  }
}; 

console.log(login);

try{
    login()
} catch(err){
    console.log(err);
}finally{
    console.log ("Runs no matter what")
};