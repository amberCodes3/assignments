const express = require("express")
const inventoryRouter = express.Router()
const Inventory = require("../models/inventory.js")

//GET ALL
inventoryRouter.get("/", (req, res, next) => {
    Inventory.find((err, users)=> {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(users)
    })
})

//POST ONE
inventoryRouter.post("/", (req, res, next) => {
    const newInventory= new User(req.body)
    newInventory.save((err, savedInventory) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedInventory)
    })
})


module.exports = inventoryRouter