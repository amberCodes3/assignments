const express = require("express")
const inventoryRouter = express.Router()
const Inventory = require("../models/inventory.js")

//GET ALL
inventoryRouter.get("/", (req, res, next) => {
    Inventory.find((err, inventories)=> {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(inventories)
    })
})

//POST ONE
inventoryRouter.post("/", (req, res, next) => {
    const newInventory= new Inventory(req.body)
    newInventory.save((err, savedInventory) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedInventory)
    })
})

//DELETE ONE
inventoryRouter.delete("/:inventoryId", (req, res, next) => {
    Inventory.findOneAndDelete({ _id: req.params.inventoryId }, (err, deletedItem) => {
     if(err){
         res.status(500)
         return next(err)
     }
     return res.status(201).send(`Successfully deleted ${deletedItem} fromm the database`)
    })
 })

 //UPDATE(PUT) ONE
 inventoryRouter.put("/:inventoryId", (req, res, next ) => {
    Inventory.findOneAndUpdate(
    { _id: req.params.inventoryId },
    req.body, 
    { new: true }, 
    (err, updateInventory) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updateInventory)
    })
})


module.exports = inventoryRouter 