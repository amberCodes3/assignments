//MIDDLEWARE AND NEXT 
const express = require("express")
const app = express()
const uuid  = require('uuid').v4
const middleware = require('./middleware.js')

app.use(express.json())
app.use(middleware)

app.use("/player", (req, res, next) => {
    req.body = 
        { 
            firstName: "LeBron", 
            lastName: "James", 
            _id: uuid()
        }
    next()
})

app.get("/player", (req, res) => {
    console.log("Get Requested worked")
    res.send(req.body)
})

app.listen(6000, () => {
    console.log("Running on Port 6000")
})