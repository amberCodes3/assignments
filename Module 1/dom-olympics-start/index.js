// Your first task is to use pure JavaScript to insert a header to the top of this page. It should look like this:
// Utilize the css already written for .name and .header
// Notice that your name needs to be a different color. Wrapping text in a span tag is a great way to do this.

const myHead = document.getElementById("header");

myHead.textContent = "JavaScript Made This!!";

madeBy = document.createElement("wrote"); 

madeBy.style.color = "black";

madeBy.textContent = "wrote the JavaScript";

myName = document.createElement("name");

myName.setAttribute("class", "name");

myName.textContent = "Amber ";

var h1 = myHead.append(myName);

var h2 = myName.append(madeBy);

// Write some custom JavaScript to automatically change the words of the conversation to something fun and good.

var myMsg = document.getElementsByClassName("message");

myMsg[0].textContent = ("How to make chicken?");
myMsg[1].textContent = ("what?");
myMsg[2].textContent = ("Where to by chicken");
myMsg[3].textContent = ("Mom this isn't google!");

// Write some JavaScript that will wait until the user clicks the "clear" button, and then clears out all conversation.

const btn = document.getElementById("clear-button");

btn.addEventListener("click", function(){
  const message = document.getElementsByClassName ("messages")[0];
    message.innerHTML = " "
    });


// Use the drop down to write some JavaScript that will notice when the drop down has changed and then changes the background colors of the messages accordingly.

var drpDwn = document.getElementById("theme-drop-down");

var msgOne = document.querySelectorAll(".left");
var msgTwo = document.querySelectorAll(".right");

function changeDrpDwn(){
  if(drpDwn.value === "theme-one"){
    for (var i = 0; i < msgOne.length; i++) {
        msgOne[i].style.backgroundColor = "burlywood"
    } for (var i = 0; i < msgTwo.length; i++){
      msgTwo[i].style.backgroundColor = "lightblue"
      msgTwo[i].style.color = "black"
    }
  } else if(drpDwn.value === "theme-two") {
    for (var i = 0; i < msgOne.length; i++) {
      msgOne[i].style.backgroundColor = "red"
    }for (var i = 0; i < msgTwo.length; i++){
      msgTwo[i].style.backgroundColor = "black"
      msgTwo[i].style.color = "white"
    }
  }
}
drpDwn.addEventListener("change", changeDrpDwn);

//Be able to add more messages using the form at the bottom.

document.message.addEventListener("submit", function(e){
  event.preventDefault()
  var input = document.message.input.value
  console.log(input)

  var div = document.createElement("div")
  div.textContent = input

  div.setAttribute("class", "left")
  
});