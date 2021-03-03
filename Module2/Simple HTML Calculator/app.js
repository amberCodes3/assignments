var anwr1 = document.getElementById("answer1");
var anwr2 = document.getElementById("answer2");
var anwr3 = document.getElementById("answer3");
var subt1 = document.getElementById("submit1");
var subt2 = document.getElementById("submit2");
var subt3 = document.getElementById("submit3");
const body = document.getElementsByTagName("body");


subt1.addEventListener("click", function(event){
    event.preventDefault()

    add();
    changeColors("red");
}); 

function add(add1, add2){

    var add1= document.getElementById("adding1").value;
    console.log(add1)
    var add2= document.getElementById("adding2").value;
    console.log(add2)
  
    var solution = anwr1.value = parseFloat(add1) + parseFloat(add2);
    console.log(solution);
};


subt2.addEventListener("click", function(event){
    event.preventDefault()

    sub();
    changeColors("blue");
}); 

function sub(sub1, sub2){

    var sub1 = document.getElementById("subtracting1").value; 
    console.log(sub1)
    var sub2 = document.getElementById("subtracting2").value;
    console.log(sub2)

    solution = anwr2.value= parseFloat(sub1) - parseFloat(sub2);
    console.log(solution);
};


subt3.addEventListener("click", function(event){
    event.preventDefault()

    mult();
    changeColors("yellow");
}); 

function mult(mult1, mult2){

    var mult1 = document.getElementById("multiplying1").value; 
    console.log(mult1)
    var mult2 = document.getElementById("multiplying2").value;
    console.log(mult2)

    solution = anwr3.value= parseFloat(mult1) * parseFloat(mult2);
    console.log(solution);
};

function changeColors (color){
   document.body.style.backgroundColor = color
};