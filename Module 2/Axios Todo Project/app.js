const todoList = document.getElementById("todo")
const todoForm = document.todoForm
const list =document.getElementById("list")
todoForm.addEventListener("submit", handleSubmit)


function getTodos(){
    //Remove every todo from the list
    //Call clear list
    clearList()
    //Call get Todos
    axios.get("https://api.vschool.io/amber/todo")
        .then(response => {
            console.log(response.data)
            //Take the response data, which is an array of todos
            //For each todo, call createTodo(todo)
            response.data.forEach(todo => createTodo(todo))
        })
        .catch(error => {
            console.log(error)
        })
};

getTodos()



function clearList(){
    //remove each todo from the list
    while(list.firstChild){
        list.removeChild(list.firstChild)
    }
};



function createTodo(todo){
   //Create DOM Element and Append it to the todo list
    const title = document.createElement("h1")
    const price = document.createElement("h2")
    const description = document.createElement("h3")
    const image = document.createElement('img')
    const button = document.createElement("button")
    const checkBox1 = document.createElement("input")
    checkBox1.type = "checkbox";

    
    title.textContent = todo.title
    price.textContent = todo.price
    description.textContent = todo.description
    image.src = todo.imgUrl
    button.textContent = "Delete"
    
    if(todo.completed){
        title.style.textDecoration = 'line-through'
        price.style.textDecoration = "line-through"
        description.style.textDecoration = "line-through"
        image.style.textDecoration = "line-through"
        checkBox1.checked = true
    }else {
        title.style.textDecoration = 'none'
    }
    
    button.addEventListener('click', () => {
        axios.delete("https://api.vschool.io/amber/todo/" + todo._id)
    })

    checkBox1.addEventListener('click', () => {
        axios.put("https://api.vschool.io/amber/todo/" + todo._id, {completed: !todo.completed})
        .then( res => {  
            getTodos()
        })
    })



    list.appendChild(title)
    list.appendChild(price)
    list.appendChild(description)
    list.appendChild(image)
    title.appendChild(button)
    title.appendChild(checkBox1)
};



function handleSubmit(event){
    event.preventDefault()
    const newTodo = {
        title: todoForm.title.value,
        price: todoForm.price.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value
    }
    
    axios.post("https://api.vschool.io/amber/todo", newTodo)
        .then(getTodos)
};