const express = require("express")
const todoRouter = express.Router()
const uuid = require("uuid").v4

const todos = [
    { name: "Homework", description: "Complete the Todo homework assignment", imageUrl: "https://miro.medium.com/max/4000/0*bP0GbIkuUFhxhzoo", completed: false, _id: uuid(), }, 
    { name: "Clothes", description: "Fold clothes", imageUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gh-closet-organization-1583437747.png?crop=0.837xw:0.558xh;0.0847xw,0.245xh&resize=640:*", completed: false, _id: uuid() }, 
    { name: "Clean", description: "Clean the kitchen", imageUrl: "https://previews.123rf.com/images/percent/percent1702/percent170200030/72186957-cleaning-supplies-sponges-rags-brushes-sprays-cleaning-agents-isolated-on-white.jpg", completed: true, _id: uuid() }
]

//GET ALL
todoRouter.get( "/", (req, res) => {
    res.send(todos)
})

//GET ONE by Id
todoRouter.get("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const foundTodo = todos.find( todo => todo._id === todoId)
    res.send(foundTodo) 
})

//POST ONE
todoRouter.post("/", (req, res) => {
    const newTodo = req.body
    newTodo._id = uuid()
    todos.push(newTodo)
    res.send(`Successfully added ${newTodo.name}, ${newTodo.description}, ${newTodo.imageUrl}, ${newTodo.completed} and ${newTodo._id} to the database`)
})

//UPDATE ONE by Id
todoRouter.put("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex( todo => todo._id === todoId)
    const updateTodo = Object.assign(todos[todoIndex], req.body)
    res.send(updateTodo)
})

//DELETE ONE by Id
todoRouter.delete("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex( todo => todo._id === todoId)
    todos.splice(todoIndex, 1)
    res.send("Successfully deleted your todo item!")
})

module.exports = todoRouter 