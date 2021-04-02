const express = require("express")
const userRouter = express.Router()
const User = require("../models/user.js")
//const uuid  = require('uuid').v4 (MongoDB will creat an id for you)

/* This will go in the the DB
const users = [
    { name: "Jane", age: 45, _id: uuid() },
    { name: "Dan", age: 37, _id: uuid() },
    { name: "Phil", age: 37, _id: uuid() },
    { name: "John", age: 22, _id: uuid() }
]*/

//GET ALL in Express
/*userRouter.get("/", (req, res) => {
    res.status(200)
    res.send(users)
})*/

//GET ALL in Mongoose
userRouter.get("/", (req, res, next) => {
    User.find((err, users)=> {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(users)
    })
})

//GET ONE Params in Express
/*userRouter.get("/:userId", (req, res, next) => {
    const userId = req.params.userId
    const foundUser = users.find(user => user._id === userId)
    if(!foundUser){
        const error = new Error(`The user  with id ${userId} was not found`)
        res.status(500)
       return next(error)
    }
    res.status(200).send(foundUser)
})*/

//POST ONE in Express
/*userRouter.post("/", (req, res) => {
    const newUser = req.body
    users.push(newUser)
    newUser._id = uuid()
    res.status(201).send(newUser)
})*/

//POST ONE in Mongoose
userRouter.post("/", (req, res, next) => {
    const newUser = new User(req.body)
    newUser.save((err, savedUser) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedUser)
    })
})

//GET by Query in Express
/*userRouter.get("/find/name", (req, res, next) => {
    const name = req.query.name
    console.log(name)
    if(!name){
        const error = new Error("You must provide a name")
        res.status(500)
        return next(error)
    }
    const filteredUsers = users.filter(user => user.name === name)
    res.status(200).send(filteredUsers)
})*/

//DELETE ONE in Express
/*userRouter.delete("/:userId", (req, res) => {
    const userId = req.params.userId
    const userIndex = users.findIndex(user => user._id === userId)
    users.splice(userIndex, 1)
    res.send("Successfully deleted your user!")
})*/

//DELETE ONE in Mongoose
userRouter.delete("/:userId", (req, res, next) => {
   User.findOneAndDelete({ _id: req.params.userId }, (err, deletedItem) => {
    if(err){
        res.status(500)
        return next(err)
    }
    return res.status(201).send(`Successfully deleted user ${deletedItem} fromm the database`)
   })
})

//UPDATE (PUT) ONE in Express
/*userRouter.put("/:userId", (req, res) => {
    const userId = req.params.userId
    const updateObject = req.body
    const userIndex = users.findIndex(user => user._id === userId)
    const updateUser = Object.assign(users[userIndex], updateObject)
    res.status(201).send(updateUser)
})*/

//UPDATE (PUT) ONE in Mongoose
userRouter.put("/:userId", (req, res, next ) => {
    User.findOneAndUpdate(
    { _id: req.params.userId }, //find this one to update
    req.body, // update the object with this data
    { new: true }, //send the updated version to FrontEnd 
    (err, updateUser) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updateUser)
    })
})


module.exports = userRouter 