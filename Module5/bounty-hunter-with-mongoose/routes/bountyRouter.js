const express = require("express")
const bountyRouter = express.Router()
const Bounty = require("../models/bounty.js") 


/*const bounties = [
   {firstName: "Dominic", lastName: "Dean", living: true, amount: 500, type: "Sith", _id: uuid() }, 
   {firstName: "Gary", lastName: "Wright", living: true, amount: 200, type: "Jedi", _id: uuid() }, 
   {firstName: "Gabrielle", lastName: "Howard", living: false, amount: 400, type: "Jedi", _id: uuid() },
   {firstName: "Quinn", lastName: "Goodwin", living: true, amount: 1000, type: "Sith", _id: uuid() }
]*/

bountyRouter.get("/", (req, res, next) => {
    Bounty.find((err, bounties)=> {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})

bountyRouter.get("/find/type", (req, res, next) => {
    Bounty.find({ type: req.query.type }, (err, bounties) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})

bountyRouter.post("/", (req, res, next) => {
    const newBounty = new Bounty(req.body)
    newBounty.save((err, savedBounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBounty)
    })
})

bountyRouter.delete("/:bountyId", (req, res, next) => {
   Bounty.findOneAndDelete({_id: req.params.bountyId}, (err, deletedItem) => {
       if(err){
        res.status(500)
        return next(err)
    }
    return res.status(201).send(`Successfully deleted bounty ${deletedItem} fromm the database`)
   })
})

bountyRouter.put("/:bountyId", (req, res, next) => {
    Bounty.findOneAndUpdate(
        { _id: req.params.bountyId }, 
        req.body, 
        { new: true }, 
        (err, updateBounty) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updateBounty)
    })
})


module.exports = bountyRouter

