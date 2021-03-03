const myGrid = document.getElementById('block1')

myGrid.addEventListener('mouseover', function(){
   myGrid.style.backgroundColor = "blue"
});

myGrid.addEventListener("mouseout", function(){
    myGrid.style.backgroundColor = "white"
}); 

myGrid.addEventListener("mousedown", function(){
    myGrid.style.backgroundColor = "red"
});

myGrid.addEventListener("mouseup", function(){
    myGrid.style.backgroundColor = "yellow"
})

myGrid.addEventListener("dblclick", function(){
    myGrid.style.backgroundColor = "green"
});

myGrid.addEventListener("wheel", function(){
    myGrid.style.backgroundColor = "orange"
});

window.addEventListener("wheel", function(){
    myGrid.style.backgroundColor = "orange"
});

window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(event) {
    if (event.keyCode == "82") {
        myGrid.style.backgroundColor = "red"
    } else if (event.keyCode == "71") {
    myGrid.style.backgroundColor = "green"
} else if (event.keyCode == "66") {
    myGrid.style.backgroundColor = "blue"
} else if (event.keyCode == "89") {
    myGrid.style.backgroundColor = "yellow"
} else if (event.keyCode == "79") {
    myGrid.style.backgroundColor = "orange"
} else if (event.keyCode == "71") {
    myGrid.style.backgroundColor = "green"
} else {
    myGrid.style.backgroundColor = "white";
}}

