document.addItem.addEventListener("submit", function(event){
   event.preventDefault()
   var input = document.addItem.title.value
   console.log(input)
   var newLi = document.createElement("div")
   document.getElementById("list").append(newLi)
   var div = document.createElement("div")
   
   div.textContent = input
   newLi.appendChild(div)

   var eBtn = document.createElement("button")
   newLi.appendChild(eBtn)
   eBtn.textContent = "edit"
   
   var xBtn = document.createElement("button")
   newLi.appendChild(xBtn)
   xBtn.textContent = "X"

   xBtn.addEventListener('click', function() {
      document.getElementById("list").removeChild(newLi)
   })
});

/*Extra Credit
A user will be able to click the "edit" button and see an input box appear
When the user clicks the "edit" button, a "save" button replace the "edit" button
The input box will automatically have the value of the list item
The user can edit and "save" the input box's value
On save, the input box will disappear, and the new value will appear*/
