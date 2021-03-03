const express = require("express")
const userRouter = express.Router()
const uuid  = require('uuid').v4

const users = [
    { name: "jane", age: 45, _id: uuid() },
    { name: "dan", age: 37, _id: uuid() },
    { name: "phil", age: 37, _id: uuid() },
    { name: "john", age: 22, _id: uuid() }
]

//GET ALL
userRouter.get("/", (req, res) => {
    res.send(users)
})

//GET ONE Params
userRouter.get("/:userId", (req, res) => {
    const userId = req.params.userId
    const foundUser = users.find(user => user._id === userId)
    res.send(foundUser)
})

//POST ONE
userRouter.post("/", (req, res) => {
    const newName = req.body
    users.push(newName)
    newName._id = uuid()
    res.send(`Successfully added ${newName.name} and ${newName.age} to the database`)
})

//GET by Query
userRouter.get("/find/name", (req, res) => {
    const name = req.query.name
    console.log(name)
    const filteredUsers = users.filter(user => user.name === name)
    res.send(filteredUsers)
})

//DELETE ONE
userRouter.delete("/:userId", (req, res) => {
    const userId = req.params.userId
    const userIndex = users.findIndex(user => user._id === userId)
    users.splice(userIndex, 1)
    res.send("Successfully deleted your user!")
})

//UPDATE ONE
userRouter.put("/:userId", (req, res) => {
    const userId = req.params.userId
    const updateObject = req.body
    const userIndex = users.findIndex(user => user._id === userId)
    const updateUser = Object.assign(users[userIndex], updateObject)
    res.send(updateUser)
})


module.exports = userRouter 